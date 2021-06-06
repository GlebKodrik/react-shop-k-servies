import { CardProducts } from "../../shared/CardProduct/CardProducts";

export const FavoritesItem = ({ id, product }) => {
  return (
    <>
      <CardProducts product={product} />
    </>
  );
};
