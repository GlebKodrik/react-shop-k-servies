import s from "../Header.module.css";
import { NavLink } from "react-router-dom";
import React from "react";

export const ShowMenu = (props) => {
  return (
    <>
      <div className={s.menuWrapper}>
        <ul className={s.menuLeft}>
          <li className={s.menuLeftTitle}>
            <ul>
              <li>
                <NavLink to={"/"}>Главная</NavLink>
              </li>
              <li>
                <NavLink to={"/profile/basket"}>Корзина</NavLink>
              </li>
              <li>
                <NavLink to={"/profile/purchases"}>Финансы</NavLink>
              </li>
              <li>
                <NavLink to={"/profile/communications"}>Обратная связь</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <ul className={s.exit}>
              <li onClick={props.redirectOut}>Выйти</li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};
