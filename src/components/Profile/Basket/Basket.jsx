import s from "./Basket.module.css";
export const Basket = () => {
  return (
    <>
      <div className={s.inner}>
        <div className="title">В вашей корзине пока ничего нет</div>
        <div className={s.subTitle}>
          Корзина ждет, что ее наполнят. Желаем приятных покупок!
        </div>
      </div>
    </>
  );
};
