import s from "./Favorites.module.css";
import { FavoritesItem } from "./FavoritesItem";
import { useEffect } from "react";
import { clearBoxProduct, getProducts } from "../../../redux/productsReducer";
import { useDispatch } from "react-redux";

export const Favorites = ({ favorite }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    favorite.forEach((el) => dispatch(getProducts(el.id)));
    localStorage.setItem("favorites", JSON.stringify(favorite));
    return () => {
      dispatch(clearBoxProduct());
    };
  }, [favorite]);

  return (
    <>
      {favorite.length ? (
        <div className={s.wrap}>
          <div className={s.block}>
            {favorite.map((el) => (
              <FavoritesItem key={el.id} id={el.id} />
            ))}
          </div>
        </div>
      ) : (
        <div className={s.notBlock}>
          <div className={s.title}>В Избранном пока ничего нет</div>
          <div className={s.subTitle}>
            Добавляйте товары в Избранное с помощью ❤️️
          </div>
        </div>
      )}
    </>
  );
};
