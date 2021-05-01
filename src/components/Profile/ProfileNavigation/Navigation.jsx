import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import cn from "classnames";
import { array } from "../../../common/paths";

export const Navigation = (props) => {
  return (
    <div className={s.lavelMain}>
      <div className="container">
        <div className={s.sectionItem}>
          {array.map((a) => {
            return (
              <div key={a.name} className={s.item}>
                <NavLink to={"/profile/" + a.path}>
                  <div className={s.inline}>
                    <div className={cn("material-icons red-text", s.icon)}>
                      {a.icon}
                    </div>
                    <div className={s.name}>{a.name}</div>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
