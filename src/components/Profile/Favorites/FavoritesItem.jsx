import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../../Redux/productsReducer";
import { CardProducts } from "../../CardProduct/CardProducts";

export const FavoritesItem = ({ id }) => {
  const dispatch = useDispatch();

  const product = useSelector((state) => state.products.products).find(
    (el) => el._id === id
  );
  useEffect(() => {
    if (!product) {
      dispatch(getProducts());
    }
  }, [dispatch, product]);

  console.log(product);
  return (
    <>
      <CardProducts product={product} />
    </>
  );
};
