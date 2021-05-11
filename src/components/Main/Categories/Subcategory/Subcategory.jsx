import { NavLink, useParams } from "react-router-dom";
import s from "./Subcategory.module.css";
import { Sorting } from "./Sorting/Sorting";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../../../Redux/productsReducer";
import { CardProducts } from "./CardProducts";
import { NotFound } from "../../../NotFould/NotFound";

const Subcategory = () => {
  const dispatch = useDispatch();
  const { url } = useParams();
  const actualCategory = useSelector((state) => state.products.categories).find(
    (el) => el.url === url
  );

  const products = useSelector(
    (state) => state.products.products,
    shallowEqual
  );

  useEffect(() => {
    if (actualCategory) {
      dispatch(getProducts(actualCategory._id));
    }
  }, [url]);

  return actualCategory ? (
    <>
      <div className={s.header}>
        <div className="switch">
          <NavLink to="/">Категории/</NavLink>
          <NavLink to={`/category/${actualCategory?.url}`}>
            {actualCategory?.name}
          </NavLink>
        </div>
        <div className={s.headerTitle}>
          {actualCategory?.name}{" "}
          <span className={s.headerSubTitle}>{products?.length} товаров</span>
        </div>
        <Sorting />
        <div className={s.cardWrap}>
          {products?.map((el) => {
            return <CardProducts key={el._id} productItem={el} />;
          })}
        </div>
      </div>
    </>
  ) : (
    <NotFound />
  );
};
export default Subcategory;
