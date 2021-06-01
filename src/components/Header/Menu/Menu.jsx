import React, { useState } from "react";
import s from "./../Header.module.css";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../redux/authReducer";
import { ShowMenu } from "./ShowMenu";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { blue, red } from "@material-ui/core/colors";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    fontSize: 40,
  },
});

export const Menu = (props) => {
  const [focus, setFocus] = useState(false);
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basket);
  const redirectOut = () => {
    dispatch(logOut());
  };
  const classes = useStyles();
  return (
    <>
      <div className={s.menu}>
        <div className={s.item}>
          <NavLink to="/services/location" className={s.link}>
            <div>
              <LocationOnIcon
                style={{ color: red[500] }}
                classes={{ root: classes.root }}
              />
              <div>Мы находимся</div>
            </div>
          </NavLink>
        </div>

        <div className={s.item}>
          <NavLink to="/basket" className={s.link}>
            <div className={s.itemBasket}>
              {!!basket.length && (
                <div className={s.count}>
                  {basket.length < 99 ? basket.length : "+99"}
                </div>
              )}
              <ShoppingBasketOutlinedIcon
                classes={{ root: classes.root }}
                style={{ color: blue[700] }}
              />
              <div>Корзина</div>
            </div>
          </NavLink>
        </div>

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
              <AccountCircleOutlinedIcon
                classes={{ root: classes.root }}
                style={{ color: "#8f939c" }}
              />
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
