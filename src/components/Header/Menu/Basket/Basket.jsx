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
  const auth = useSelector((state) => state.auth.isAuth);
  const productsAll = useSelector((state) => state.products.products);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  const clickDelete = () => {
    basket.map((el) => dispatch(removeBasket(el.id)));
  };

  let product = basket.map((item) => {
    return productsAll.find((el) => el._id === item.id);
  });

  const sum = product.reduce((sum, n) => sum + n?.price, 0);

  return (
    <div className={"container"}>
      {basket.length ? (
        <div className={s.wrap}>
          <div className={s.total}>
            <div className={s.totalText}>
              Итого: {basket.length} товара на {sum} ₽
            </div>
          </div>
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
              return <BasketItem key={el.id} id={el.id} {...{ auth }} />;
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
