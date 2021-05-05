import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import s from "./NotFound.module.css";
import React from "react";
import cn from "classnames";
export const NotFound = () => {
  return (
    <div className={s.wrap}>
      <div className="container">
        <div className={s.block}>
          <div className={s.img}>
            <img
              src="https://ctoetotakoe.ru/wp-content/uploads/2016/05/404-not-found.png"
              alt=""
            />
          </div>
          <div className={s.text}>
            <div className={cn(s.title, "title")}>
              По Вашему запросу ничего не найдено
            </div>
            <NavLink to={"/"}>
              <Button variant="outlined" color="primary">
                На главную
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
