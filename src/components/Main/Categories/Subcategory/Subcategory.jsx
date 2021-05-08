import { NavLink, useParams } from "react-router-dom";

import s from "./Subcategory.module.css";
import { Sorting } from "./Sorting/Sorting";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../../../Redux/productsReducer";
import { CardProducts } from "./CardProducts";
import { act } from "@testing-library/react";
import { NotFound } from "../../../NotFould/NotFound";

export const Subcategory = () => {
  const { url } = useParams();
  const actualCategory = useSelector((state) => state.products.categories).find(
    (el) => el.url === url
  );

  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (actualCategory) {
      dispatch(getProducts(actualCategory._id));
    }
  }, [url]);

  return actualCategory ? (
    <>
      <div className={s.header}>
        <div className={s.headerSwitch}>
          <NavLink to="/">Категории/</NavLink>
          <NavLink to={`/category/${actualCategory.url}`}>
            {actualCategory.name}
          </NavLink>
        </div>
        <div className={s.headerTitle}>
          Пример <span className={s.headerSubTitle}>605 товаров</span>
        </div>
        <Sorting />
        <div className={s.cardWrap}>
          {products.map((el) => {
            return <CardProducts productItem={el} />;
          })}
        </div>
      </div>
    </>
  ) : (
    <NotFound />
  );
};
