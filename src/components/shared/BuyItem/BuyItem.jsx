import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import s from "./BuyItem.module.css";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import cn from "classnames";
import { addBasket } from "../../../redux/basketReducer";
const useStyles = makeStyles({
  noActive: {
    display: "block",
    color: "var(--main-text-color)",
  },
  active: {
    display: "block",
    color: "white",
  },
});

export const BuyItem = ({ id }) => {
  const classes = useStyles();
  let history = useHistory();
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basket);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  const clickAddBasket = (e) => {
    e.preventDefault();
    dispatch(addBasket(id));
  };
  const clickInBasket = (e) => {
    e.preventDefault();
    history.push("/basket");
  };
  return (
    <div>
      {!!basket.find((el) => el.id === id) ? (
        <div className={cn(s.item, s.active)} onClick={clickInBasket}>
          <ShoppingCartOutlinedIcon classes={{ root: classes.active }} />
        </div>
      ) : (
        <div className={cn(s.item)}>
          <ShoppingCartOutlinedIcon
            onClick={clickAddBasket}
            classes={{ root: classes.noActive }}
          />
        </div>
      )}
    </div>
  );
};
