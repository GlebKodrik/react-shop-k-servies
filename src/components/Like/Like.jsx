import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { addFavorites, removeFavorites } from "../../Redux/productsReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const Like = ({ id, ...props }) => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth.isAuth);
  const favorite = useSelector((state) => state.products.favorites);

  useEffect(() => {
    !!favorite && localStorage.setItem("favorites", JSON.stringify(favorite));
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
      {!!favorite.find((el) => el.id === id) ? (
        <FavoriteIcon className="favorites" onClick={removeFavorite} />
      ) : (
        <FavoriteBorderOutlinedIcon
          className="favorites"
          onClick={addFavorite}
        />
      )}
    </>
  );
};
