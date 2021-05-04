import React, { useState } from "react";
import s from "./../Header.module.css";
import { NavLink, useHistory } from "react-router-dom";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { logOut } from "../../../Redux/authReducer";
import { array } from "../../../common/paths";
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
    <div>
      <div className={s.menu}>
        <NavLink to="/services/location" className={s.link}>
          <div className={s.item}>
            <div
              className="material-icons"
              style={{ fontSize: 40, color: "red" }}
            >
              location_on
            </div>
            <div>Мы находимся</div>
          </div>
        </NavLink>
        {props.isAuth && (
          <NavLink to="/profile/basket" className={s.link}>
            <div className={s.item}>
              <div
                className="material-icons"
                style={{ fontSize: 40, color: "#3b5ca8" }}
              >
                shopping_basket
              </div>
              <div>Корзина</div>
            </div>
          </NavLink>
        )}
        <NavLink
          to={!props.isAuth ? "/login" : "/profile/details"}
          className={s.link}
        >
          <div
            className={s.item}
            onMouseEnter={() => setFocus(true)}
            onMouseLeave={() => setFocus(false)}
          >
            <div
              className="material-icons"
              style={{ fontSize: 40, color: "#8f939c" }}
            >
              account_circle
            </div>
            <div className={s.entrance}>
              {!props.isAuth ? "Войти" : "Профиль"}
            </div>

            {props.isAuth && (
              <div
                className={cn(s.profileFocus, {
                  [s.MenuRight]: focus,
                })}
              >
                {focus && <ShowMenu redirectOut={redirectOut} />}
              </div>
            )}
          </div>
        </NavLink>
      </div>
    </div>
  );
};
