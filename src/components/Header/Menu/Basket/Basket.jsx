import s from "./Basket.module.css";
import { useDispatch, useSelector } from "react-redux";
import { BasketItem } from "./BasketItem/BasketItem";
import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { removeBasket } from "../../../../Redux/productsReducer";
import { ModalPopup } from "../../../shared/ModalPopup";
import { PopupBuy } from "../../../Popup/PopupBuy/PopupBuy";

export const Basket = () => {
  const [open, setOpen] = useState(false);
  let dispatch = useDispatch();
  const basket = useSelector((state) => state.products.basket);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  const clickDelete = () => {
    basket.map((el) => dispatch(removeBasket(el.id)));
  };

  return (
    <div className={"container"}>
      {basket.length ? (
        <div className={s.wrap}>
          <div className={s.delete}>
            <span onClick={clickDelete} className={s.deleteAll}>
              Очистить корзину
            </span>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setOpen(true)}
            >
              Оформить заказ
            </Button>
            <ModalPopup
              component={PopupBuy}
              {...{ open, setOpen }}
              basket={basket}
            />
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
    </div>
  );
};
