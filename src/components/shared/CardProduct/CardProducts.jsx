import s from "./CardProduct.module.css";
import { NavLink } from "react-router-dom";
import { LikeItem } from "../LikeItem/LikeItem";
import { BuyItem } from "../BuyItem/BuyItem";
import { urlApi } from "../../../common/urlApi";

export const CardProducts = ({ product }) => {
  return (
    <div className={s.item}>
      <NavLink to={`/product/${product?._id}`}>
        <div className={s.cardItem}>
          <div className={s.cardItemTop}>
            <div className={s.cardItemImg}>
              <img src={`${urlApi}${product?.images[0]}`} alt="Продукт" />
            </div>

            <div className={s.cardItemText}>{product?.name}</div>
          </div>
          <div className={s.cardItemCost}>
            <div>
              {product?.price}
              <span className={s.cardItemRub}> ₽</span>
            </div>
            <div className={s.cardIcon}>
              <div className={s.cardIconBuy}>
                <BuyItem id={product?._id} />
              </div>
              <LikeItem id={product?._id} />
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};
