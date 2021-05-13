import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { addFavorites, removeFavorites } from "../../Redux/productsReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const Like = ({ id }, ...props) => {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.products.favorites);

  useEffect(() => {
    !!favorite && localStorage.setItem("favorites", JSON.stringify(favorite));
  }, [dispatch, favorite]);

  const addFavorite = (e) => {
    e.preventDefault();
    dispatch(addFavorites(id));
  };
  const removeFavorite = (e) => {
    e.preventDefault();
    dispatch(removeFavorites(id));
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
