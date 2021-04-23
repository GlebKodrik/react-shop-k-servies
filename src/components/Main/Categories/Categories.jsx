import s from "./Categories.module.css";
import { NavLink } from "react-router-dom";
import { categories } from "../../../common/paths";

export const Categories = () => {
  return (
    <div className={s.categories}>
      <div className="container">
        <div className={s.categoriesTitle}>Категории</div>
        <div className={s.categoriesWrapp}>
          {/*Item*/}
          {categories.map((item) => {
            return (
              <NavLink to="/" className={s.categoriesItem}>
                <div className={s.categoriesContent}>
                  <div className={s.categoriesContentImg}>
                    <img src={item.image} alt="" />
                  </div>
                  <div className={s.categoriesName}>{item.name}</div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};
