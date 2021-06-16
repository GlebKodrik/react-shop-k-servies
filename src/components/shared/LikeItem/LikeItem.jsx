import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addFavorites, removeFavorites } from "../../../redux/favoriteReducer";

export const LikeItem = ({ id, ...props }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuth);
  const favorite = useSelector((state) => state.favorite.favorites);
  const userId = useSelector((state) => state.favorite.userId);
  const userFavorite = favorite.filter((el) => el.userId === userId);
  const chose = userFavorite.find((el) => el.id === id);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorite));
  }, [dispatch, favorite]);

  const addFavorite = (e) => {
    e.preventDefault();
    auth ? dispatch(addFavorites(id)) : props.setOpen(true);
  };
  const removeFavorite = (e) => {
    e.preventDefault();
    auth ? dispatch(removeFavorites(id)) : props.setOpen(true);
  };

  return (
    <>
      {/*{userBasket.map((el) => {*/}
      {/*  if (el.userId === _id) {*/}
      {/*    return (*/}
      {/*      <FavoriteIcon className="favorites" onClick={removeFavorite} />*/}
      {/*    );*/}
      {/*  } else {*/}
      {/*    return (*/}
      {/*      <FavoriteBorderOutlinedIcon*/}
      {/*        className="favorites"*/}
      {/*        onClick={addFavorite}*/}
      {/*      />*/}
      {/*    );*/}
      {/*  }*/}
      {/*})}*/}
      {chose?.userId === userId ? (
        <FavoriteIcon className="favorites" onClick={removeFavorite} />
      ) : (
        <FavoriteBorderOutlinedIcon
          className="favorites"
          onClick={addFavorite}
        />
      )}
      {/*{!!favorite.find((el) => el.id === id) ? (*/}
      {/*  <>*/}
      {/*    <FavoriteIcon className="favorites" onClick={removeFavorite} />*/}
      {/*  </>*/}
      {/*) : (*/}
      {/*  <FavoriteBorderOutlinedIcon*/}
      {/*    className="favorites"*/}
      {/*    onClick={addFavorite}*/}
      {/*  />*/}
      {/*)}*/}
    </>
  );
};
