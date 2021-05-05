import React, { useState } from "react";
import s from "./../Header.module.css";
import { NavLink, useHistory } from "react-router-dom";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { logOut } from "../../../Redux/authReducer";
import { ShowMenu } from "./ShowMenu";

export const Menu = (props) => {
  const [focus, setFocus] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const redirectOut = () => {
    dispatch(logOut());
    history.push("/");
  };
  return (
    <>
      <div className={s.menu}>
        <div className={s.item}>
          <NavLink to="/services/location" className={s.link}>
            <div>
              <div
                className="material-icons"
                style={{ fontSize: 40, color: "red" }}
              >
                location_on
              </div>
              <div>Мы находимся</div>
            </div>
          </NavLink>
        </div>

        {props.isAuth && (
          <div className={s.item}>
            <NavLink to="/profile/basket" className={s.link}>
              <div>
                <div
                  className="material-icons"
                  style={{ fontSize: 40, color: "#3b5ca8" }}
                >
                  shopping_basket
                </div>
                <div>Корзина</div>
              </div>
            </NavLink>
          </div>
        )}
        <div
          className={s.item}
          onMouseEnter={() => setFocus(true)}
          onMouseLeave={() => setFocus(false)}
        >
          <NavLink
            to={!props.isAuth ? "/login" : "/profile/details"}
            className={s.link}
          >
            <div>
              <div
                className="material-icons"
                style={{ fontSize: 40, color: "#8f939c" }}
              >
                account_circle
              </div>
              <div className={s.entrance}>
                {!props.isAuth ? "Войти" : "Профиль"}
              </div>
            </div>
          </NavLink>
          {props.isAuth && (
            <div
              className={cn(s.profileFocus, s.profilePosition, {
                [s.MenuRight]: focus,
              })}
            >
              {focus && <ShowMenu redirectOut={redirectOut} />}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
