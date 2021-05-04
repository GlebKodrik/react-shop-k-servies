import s from "./FooterMenu.module.css";
import { NavLink } from "react-router-dom";

export const Menu = () => {
  return (
    <div className={s.menu}>
      {/*Buyers*/}
      <div className={s.buyers}>
        <div className={s.title}>Покупателям</div>
        <ul>
          <li className={s.navigation__item}>
            <NavLink to="/services/location">Где мы находимся</NavLink>
          </li>
          <li className={s.navigation__item}>
            <NavLink to="/services/guarantee">Гарантия</NavLink>
          </li>
          <li className={s.navigation__item}>
            <NavLink to="/services/info-product">Информация о товарах</NavLink>
          </li>
        </ul>
      </div>
      {/*About*/}
      <div className={s.buyers}>
        <div className={s.title}>О компании</div>
        <ul>
          <li className={s.navigation__item}>
            <NavLink to="/services/about">О нас</NavLink>
          </li>
          <li className={s.navigation__item}>
            <NavLink to="/services/requisites">Реквизиты</NavLink>
          </li>
          <li className={s.navigation__item}>
            <NavLink to="/services/contacts">Контакты</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
