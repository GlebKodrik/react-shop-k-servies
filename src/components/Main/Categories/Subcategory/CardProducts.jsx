import s from "./Subcategory.module.css";
import { NavLink } from "react-router-dom";

export const CardProducts = ({ productItem: product }, ...props) => {
  return (
    <>
      <NavLink to={`/product/${product._id}`}>
        <div className={s.cardItem}>
          <div className={s.cardItemTop}>
            <div className={s.cardItemImg}>
              <img src={product.img} alt="Продукт" />
            </div>

            <div className={s.cardItemText}>{product.name}</div>
          </div>
          <div className={s.cardItemCost}>
            2800<span className={s.cardItemRub}> ₽</span>
          </div>
        </div>
      </NavLink>
    </>
  );
};
