import s from "./Subcategory.module.css";
import { Sorting } from "./Sorting/Sorting";
export const Subcategory = () => {
  return (
    <>
      <div className={s.header}>
        <div className={s.headerSwitch}>
          <a href="#">Пример/</a>
          <a href="#">Пример</a>
        </div>
        <div className={s.headerTitle}>
          Пример <span className={s.headerSubTitle}>605 товаров</span>
        </div>
        <Sorting />
      </div>
    </>
  );
};
