import { CardProducts } from "../../shared/CardProduct/CardProducts";

export const FavoritesItem = ({ product, ...props }) => {
  return (
    <>
      <CardProducts product={product} />
    </>
  );
};
