import s from "./Categories.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export const Categories = () => {
  const categories = useSelector((state) => state.products.categories);

  return (
    <div className={s.categories}>
      <div className={s.title}>Категории</div>
      <div className={s.wrapp}>
        {categories.map((item) => {
          return (
            <NavLink
              to={`/category/${item.url}`}
              className={s.item}
              key={item._id}
            >
              <div>
                <div className={s.contentImg}>
                  <img src={item.img} alt="" />
                </div>
                <div className={s.name}>{item.name}</div>
              </div>
            </NavLink>
          );
        })}
        {/*Item*/}
      </div>
    </div>
  );
};