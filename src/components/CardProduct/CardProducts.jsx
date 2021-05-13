import s from "./CardProduct.module.css";
import { NavLink } from "react-router-dom";
import { Like } from "../Like/Like";
import { PopupAuth } from "../Popup/PopupAuth/PopupAuth";
import { ModalPopup } from "../../common/modalPopup";
import { useState } from "react";

export const CardProducts = ({ product }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={s.item}>
      <ModalPopup component={PopupAuth} {...{ open, setOpen }} />
      <NavLink to={`/product/${product?._id}`}>
        <div className={s.cardItem}>
          <div className={s.cardItemTop}>
            <div className={s.cardItemImg}>
              <img src={product?.img} alt="Продукт" />
            </div>

            <div className={s.cardItemText}>{product?.name}</div>
          </div>
          <div className={s.cardItemCost}>
            <div>
              {product?.price}
              <span className={s.cardItemRub}> ₽</span>
            </div>
            <Like id={product?._id} setOpen={setOpen} />
          </div>
        </div>
      </NavLink>
    </div>
  );
};
