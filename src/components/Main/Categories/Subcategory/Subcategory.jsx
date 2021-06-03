import { NavLink, useParams } from "react-router-dom";
import s from "./Subcategory.module.css";
import { Sorting } from "./Sorting/Sorting";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductsCategory } from "../../../../redux/productsReducer";
import { CardProducts } from "../../../page/CardProduct/CardProducts";
import Loader from "../../../shared/Loader/Loader";
import { NotFound } from "../../../page/NotFould/NotFound";

const Subcategory = () => {
  const categories = useSelector((state) => state.products.categories);
  const isFetching = useSelector((state) => state.products.isFetching);
  const dispatch = useDispatch();
  const { url } = useParams();

  const actualCategories = categories.find((el) => el.url === url);

  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    if (actualCategories) {
      dispatch(getProductsCategory(actualCategories._id));
    }
  }, [actualCategories, dispatch]);

  if (isFetching) {
    return <Loader />;
  }

  if (!actualCategories) {
    return <NotFound />;
  }

  return (
    <>
      <div className={s.header}>
        <div className="switch">
          <NavLink to="/">Категории/</NavLink>
          <NavLink to={`/category/${actualCategories?.url}`}>
            {actualCategories?.name}
          </NavLink>
        </div>
        <div className={s.headerTitle}>
          {actualCategories?.name}{" "}
          <span className={s.headerSubTitle}>{products?.length} товаров</span>
        </div>
        <Sorting />
        <div className={s.cardWrap}>
          {products.map((el) => {
            return <CardProducts key={el._id} product={el} />;
          })}
        </div>
      </div>
    </>
  );
};
export default Subcategory;
