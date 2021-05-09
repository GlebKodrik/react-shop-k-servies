import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProducts } from "../../../../../Redux/productsReducer";
import s from "./Product.module.css";

export const Product = () => {
  let params = useParams();
  let dispatch = useDispatch();
  const product = useSelector((state) => state.products.products).find(
    (el) => el._id === parseInt(params.id)
  );

  useEffect(() => {
    if (!product) {
      dispatch(getProducts());
    }
  }, [params.id]);
  console.log(product);
  return (
    <>
      <div className={"title"}>{product?.name}</div>
      <div className={s.inner}>
        <div className={s.mainImg}>
          <img src={product?.img} alt="" />
        </div>
        <div className={s.infoCost}>текст</div>
      </div>
    </>
  );
};
