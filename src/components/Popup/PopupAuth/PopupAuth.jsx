import s from "./PopupAuth.module.css";
import cn from "classnames";
import { NavLink } from "react-router-dom";
export const PopupAuth = () => {
  return (
    <div className={s.wrap}>
      <div className={cn("title", s.title)}>Авторизация</div>
      <div className={s.text}>
        Для добавления товара в избранное нужно{" "}
        <NavLink className={s.link} to={"/login"}>
          авторизоваться
        </NavLink>
      </div>
    </div>
  );
};
