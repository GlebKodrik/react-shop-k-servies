import s from "./Favorites.module.css";
import { useSelector } from "react-redux";
import { FavoritesItem } from "./FavoritesItem";
export const Favorites = () => {
  const favorite = useSelector((state) => state.products.favorites);
  return (
    <>
      {favorite.length ? (
        <div className={s.wrap}>
          {favorite.map((el) => (
            <FavoritesItem key={el.id} id={el.id} />
          ))}
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
