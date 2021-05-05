import s from "../Header.module.css";
import { array } from "../../../common/paths";
import { NavLink } from "react-router-dom";
import React from "react";

export const ShowMenu = (props) => {
  return (
    <>
      <div className={s.menuWrapper}>
        <ul className={s.menuLeft}>
          <li className={s.menuLeftTitle}>
            <ul>
              {array.map((item) => {
                return (
                  <li key={item.id}>
                    <NavLink to={"/profile/" + item.path}>{item.name}</NavLink>
                  </li>
                );
              })}
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
