import React, { useState } from "react";
import s from "./../Header.module.css";
import { NavLink, useHistory } from "react-router-dom";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { logOut } from "../../../Redux/authReducer";
import { array } from "../../../common/paths";

export const HeaderItems = (props) => {
  const [focus, setFocus] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const redirectOut = () => {
    history.push("/");
    dispatch(logOut());
  };
  return (
    <div>
      <div className={s.headerMenu}>
        <div className={s.headerItem}>
          <NavLink to="/">
            <div
              className="material-icons"
              style={{ fontSize: 40, color: "red" }}
            >
              location_on
            </div>
            <div>Мы находимся</div>
          </NavLink>
        </div>
        {props.isAuth && (
          <div className={s.headerItem}>
            <NavLink to="/profile/basket">
              <div
                className="material-icons"
                style={{ fontSize: 40, color: "#3b5ca8" }}
              >
                shopping_basket
              </div>
              <div>Корзина</div>
            </NavLink>
          </div>
        )}

        <div
          className={s.headerItem}
          onMouseEnter={() => setFocus(true)}
          onMouseLeave={() => setFocus(false)}
        >
          <NavLink to={!props.isAuth ? "/login" : "/profile/details"}>
            <div
              className="material-icons"
              style={{ fontSize: 40, color: "#8f939c" }}
            >
              account_circle
            </div>
            <div>{!props.isAuth ? "Войти" : "Профиль"}</div>
          </NavLink>
          {props.isAuth && (
            <div
              className={cn(s.headerProfileFocus, {
                [s.MenuRight]: focus,
              })}
            >
              {focus && (
                <div className={s.menuWrapper}>
                  <ul className={s.menuLeft}>
                    <li className={s.menuLeftTitle}>
                      <ul>
                        {array.map((a) => {
                          return (
                            <li>
                              <NavLink to={"/profile/" + a.path}>
                                {a.name}
                              </NavLink>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                    <li>
                      <ul className={s.headerExit}>
                        <li onClick={redirectOut}>Выйти</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
