import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductsCategory } from "../../../redux/productsReducer";
import { CardProducts } from "../../page/CardProduct/CardProducts";

export const FavoritesItem = ({ id }) => {
  const dispatch = useDispatch();

  const product = useSelector((state) => state.products.products).find(
    (el) => el._id === id
  );

  useEffect(() => {
    if (!product) {
      dispatch(getProductsCategory());
    }
  }, [dispatch, product]);

  return (
    <>
      <CardProducts product={product} />
    </>
  );
};
