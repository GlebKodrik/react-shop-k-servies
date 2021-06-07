import { CardProducts } from "../../shared/CardProduct/CardProducts";

export const FavoritesItem = ({ product, ...rest }) => {
  return (
    <>
      <CardProducts product={product} />
    </>
  );
};
