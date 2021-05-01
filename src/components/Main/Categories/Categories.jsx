import s from "./Categories.module.css";
import { NavLink } from "react-router-dom";
import { categories } from "../../../common/paths";

export const Categories = () => {
  return (
    <div className={s.categories}>
      <div className="container">
        <div className={s.title}>Категории</div>
        <div className={s.wrapp}>
          {/*Item*/}
          {categories.map((item) => {
            return (
              <NavLink to="/" className={s.item}>
                <div className={s.content}>
                  <div className={s.contentImg}>
                    <img src={item.image} alt="" />
                  </div>
                  <div className={s.name}>{item.name}</div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};
