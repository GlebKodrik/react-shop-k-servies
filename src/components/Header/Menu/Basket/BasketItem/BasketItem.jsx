import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import cn from "classnames";
import s from "./BasketItem.module.css";
import { ModalPopup } from "../../../../shared/ModalPopup";
import { PopupAuth } from "../../../../Popup/PopupAuth/PopupAuth";
import { urlApi } from "../../../../../common/urlApi";
import { removeBasket } from "../../../../../redux/basketReducer";
import {
  addFavorites,
  removeFavorites,
} from "../../../../../redux/favoriteReducer";

export const BasketItem = ({ auth, product }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const favorite = useSelector((state) => state.favorite.favorites).find(
    (el) => el.id === product._id
  );

  const clickFavorite = () => {
    auth
      ? !!favorite
        ? dispatch(removeFavorites(product._id))
        : dispatch(addFavorites(product._id))
      : setOpen(true);
  };

  const clickDelete = () => {
    dispatch(removeBasket(product._id));
  };

  return (
    <div className={s.wrap}>
      <div className={s.item}>
        <div className={s.product}>
          <div className={s.itemImg}>
            <img src={`${urlApi}${product?.images[0]}`} alt="" />
          </div>
          <div className={s.text}>
            <div className={s.title}>{product?.name}</div>
            <div className={s.futures}>
              <span
                className={cn(s.favorites, { [s.like]: !!favorite })}
                onClick={clickFavorite}
              >
                {!!favorite ? "В избранном" : "В избранное"}
              </span>
              <span className={cn(s.delete)} onClick={clickDelete}>
                Удалить
              </span>
            </div>
          </div>
        </div>
        <div className={s.cost}>{product?.price}&nbsp;₽</div>
      </div>
      <div className={s.codeProduct}>Код продукта: {product?._id}</div>
      <ModalPopup component={PopupAuth} {...{ open, setOpen }} />
    </div>
  );
};
