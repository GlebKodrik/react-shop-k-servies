import s from "./Favorites.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearBoxProduct, getProducts } from "../../../redux/productsReducer";
import { FavoritesItem } from "./FavoritesItem";
import Loader from "../../shared/Loader/Loader";

export const Favorites = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.products.isFetching);
  const boxProduct = useSelector((state) => state.products.boxProduct);
  const favorite = useSelector((state) => state.favorite.favorites);

  useEffect(() => {
    favorite.forEach((el) => dispatch(getProducts(el.id)));
    localStorage.setItem("favorites", JSON.stringify(favorite));
    return () => {
      dispatch(clearBoxProduct());
    };
  }, [favorite]);

  if (isFetching) {
    return <Loader />;
  }

  return (
    <>
      {favorite.length ? (
        <div className={s.wrap}>
          <div className={s.block}>
            {boxProduct.map((el) => (
              <FavoritesItem key={el._id} id={el.id} product={el} />
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
