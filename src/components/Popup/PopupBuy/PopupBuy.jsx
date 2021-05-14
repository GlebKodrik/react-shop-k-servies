import { useEffect } from "react";
import { getProducts } from "../../../Redux/productsReducer";
import { useDispatch, useSelector } from "react-redux";

export const PopupBuy = ({ basket, ...props }) => {
  const dispatch = useDispatch();

  const productsAll = useSelector((state) => state.products.products);

  const products = basket.map((el) => {
    return productsAll.filter((item) => item._id === el.id);
  });

  useEffect(() => {
    if (!productsAll) {
      dispatch(getProducts());
    }
  }, [dispatch, productsAll]);

  return (
    <div className={"popupWrap"}>
      <div className={"popupTitle"}>Оформить заказ</div>
      {/*{products.map((el) => {*/}
      {/*  debugger;*/}
      {/*  return <div>товар {el.name}</div>;*/}
      {/*})}*/}
    </div>
  );
};
