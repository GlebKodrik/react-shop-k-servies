import s from "./Favorites.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearBoxProduct, getProducts } from "../../../redux/productsReducer";
import { FavoritesItem } from "./FavoritesItem";
import Loader from "../../shared/Loader/Loader";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

export const Favorites = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.products.isFetching);
  const boxProduct = useSelector((state) => state.products.boxProduct);
  const favorite = useSelector((state) => state.favorite.favorites);
  const { _id } = useSelector((state) => state.user.client);

  useEffect(() => {
    favorite.forEach((el) => {
      if (el.userId === _id) {
        dispatch(getProducts(el.id));
      }
    });
    localStorage.setItem("favorites", JSON.stringify(favorite));
    return () => {
      dispatch(clearBoxProduct());
    };
  }, [dispatch, favorite]);

  if (isFetching) {
    return <Loader />;
  }

  return (
    <>
      {boxProduct.length ? (
        <div className={s.wrap}>
          <div className={s.block}>
            {boxProduct.map((el) => {
              return <FavoritesItem key={el?._id} id={el?._id} product={el} />;
            })}
          </div>
        </div>
      ) : (
        <div className={s.notBlock}>
          <div className={s.title}>В Избранном пока ничего нет</div>
          <div className={s.subTitle}>
            Добавляйте товары в Избранное с помощью ❤️️
          </div>
          <NavLink to={"/"}>
            <Button variant="outlined" color="primary">
              Главная
            </Button>
          </NavLink>
        </div>
      )}
    </>
  );
};
