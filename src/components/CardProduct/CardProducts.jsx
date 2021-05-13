import s from "./CardProduct.module.css";
import { NavLink } from "react-router-dom";
import { Like } from "../Like/Like";

export const CardProducts = ({ product }) => {
  return (
    <div className={s.item}>
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
            <Like product={product} id={product?._id} />
          </div>
        </div>
      </NavLink>
    </div>
  );
};
