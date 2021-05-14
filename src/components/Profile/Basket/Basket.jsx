import s from "./Basket.module.css";
import { useDispatch, useSelector } from "react-redux";
import { BasketItem } from "./BasketItem/BasketItem";
import { useEffect } from "react";
import { Button } from "@material-ui/core";
import { removeBasket } from "../../../Redux/productsReducer";
export const Basket = () => {
  let dispatch = useDispatch();
  const basket = useSelector((state) => state.products.basket);
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  const clickDelete = () => {
    basket.map((el) => dispatch(removeBasket(el.id)));
  };

  return (
    <>
      {basket.length ? (
        <div className={s.wrap}>
          <div className={s.delete}>
            <Button variant="contained" color="primary" onClick={clickDelete}>
              Очистить корзину
            </Button>
          </div>
          <div className={s.block}>
            {basket.map((el) => {
              return <BasketItem key={el.id} id={el.id} basket={basket} />;
            })}
          </div>
        </div>
      ) : (
        <div className={s.notBasket}>
          <div className={s.title}>В вашей корзине пока ничего нет</div>
          <div className={s.subTitle}>
            Корзина ждет, что ее наполнят. Желаем приятных покупок!
          </div>
        </div>
      )}
    </>
  );
};
