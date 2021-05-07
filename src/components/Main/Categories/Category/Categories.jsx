import s from "./Categories.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cardCategory } from "../../../../Redux/productsReducer";

export const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.products.categories);
  const handleClick = (id) => {
    dispatch(cardCategory(id));
  };
  return (
    <div className={s.categories}>
      <div className={s.title}>Категории</div>
      <div className={s.wrapp}>
        {categories.map((item) => {
          return (
            <NavLink
              to={`/category/${item.path}`}
              className={s.item}
              key={item.id}
              onClick={() => handleClick(item.id)}
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
