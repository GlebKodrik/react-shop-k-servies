import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  addFavorites,
  getProducts,
  removeBasket,
  removeFavorites,
} from "../../../../../Redux/productsReducer";
import cn from "classnames";
import s from "./BasketItem.module.css";
import { ModalPopup } from "../../../../shared/ModalPopup";
import { PopupAuth } from "../../../../Popup/PopupAuth/PopupAuth";

export const BasketItem = ({ id, auth }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const product = useSelector((state) => state.products.products).find(
    (el) => el._id === id
  );

  const favorite = useSelector((state) => state.products.favorites).find(
    (el) => el.id === id
  );

  useEffect(() => {
    if (!product) {
      dispatch(getProducts());
    }
  }, [dispatch, product]);

  const clickFavorite = () => {
    auth
      ? !!favorite
        ? dispatch(removeFavorites(id))
        : dispatch(addFavorites(id))
      : setOpen(true);
  };
  const clickDelete = () => {
    dispatch(removeBasket(id));
  };
  return (
    <div className={s.wrap}>
      <div className={s.item}>
        <div className={s.product}>
          <div className={s.itemImg}>
            <img src={product?.img} alt="" />
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
