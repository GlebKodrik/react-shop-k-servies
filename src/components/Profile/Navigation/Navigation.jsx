import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { makeStyles } from "@material-ui/core";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";

const useStyles = makeStyles({
  root: {
    fontSize: 40,
  },
});
export const Navigation = (props) => {
  const classes = useStyles();
  return (
    <>
      <div className="container">
        <div className={s.sectionItem}>
          <div className={s.item}>
            <NavLink to={"/profile/details"}>
              <div className={s.inline}>
                <AccountCircleOutlinedIcon classes={{ root: classes.root }} />
                <div className={s.name}>Профиль</div>
              </div>
            </NavLink>
          </div>
          <div className={s.item}>
            <NavLink to={"/profile/basket"}>
              <div className={s.inline}>
                <ShoppingBasketOutlinedIcon classes={{ root: classes.root }} />
                <div className={s.name}>Корзина</div>
              </div>
            </NavLink>
          </div>
          <div className={s.item}>
            <NavLink to={"/profile/purchases"}>
              <div className={s.inline}>
                <AccountBalanceWalletOutlinedIcon
                  classes={{ root: classes.root }}
                />
                <div className={s.name}>Финансы</div>
              </div>
            </NavLink>
          </div>
          <div className={s.item}>
            <NavLink to={"/profile/communications"}>
              <div className={s.inline}>
                <EmailOutlinedIcon classes={{ root: classes.root }} />
                <div className={s.name}>Обратная связь</div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
