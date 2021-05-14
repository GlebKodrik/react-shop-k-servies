import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { Menu } from "./Menu/Menu";
import cn from "classnames";
import { useSelector } from "react-redux";

export const Header = () => {
  const logo = useSelector((state) => state.headerContent.logoUrl);
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <header className={s.header}>
      <div className={cn("container", s.center)}>
        <div className={s.wrap}>
          <NavLink className={s.logo} to="/">
            <img src={logo} alt="Логотип" />
          </NavLink>
          <Menu {...{ isAuth }} />
        </div>
      </div>
    </header>
  );
};
