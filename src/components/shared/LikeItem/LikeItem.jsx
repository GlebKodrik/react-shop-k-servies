import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addFavorites, removeFavorites } from "../../../redux/favoriteReducer";
import { PopupAuth } from "../../Popup/PopupAuth/PopupAuth";
import { ModalPopup } from "../ModalPopup";

export const LikeItem = ({ id, ...props }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const auth = useSelector((state) => state.auth.isAuth);
  const favorite = useSelector((state) => state.favorite.favorites);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorite));
  }, [dispatch, favorite]);

  const addFavorite = (e) => {
    e.preventDefault();
    auth ? dispatch(addFavorites(id)) : setOpen(true);
  };
  const removeFavorite = (e) => {
    e.preventDefault();
    auth ? dispatch(removeFavorites(id)) : setOpen(true);
  };
  return (
    <>
      <ModalPopup component={PopupAuth} {...{ open, setOpen }} />
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
