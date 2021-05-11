import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProducts } from "../../../../../Redux/productsReducer";
import s from "./Product.module.css";
import { ProductSlider } from "./ProductSlider";
import cn from "classnames";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { TabsList } from "./TabList/TabsList";
import { Link } from "react-scroll";

export const Product = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.products.products).find(
    (el) => el._id === parseInt(params.id)
  );
  const actualCategory = useSelector((state) => state.products.categories).find(
    (el) => el._id === product?.categoryId
  );

  useEffect(() => {
    if (!product) {
      dispatch(getProducts());
    }
  }, [params.id]);

  return (
    <>
      <div className="switch">
        <NavLink to="/">Категории/</NavLink>
        <NavLink to={`/category/${actualCategory?.url}`}>
          {actualCategory?.name}
        </NavLink>
        <span className="switchLast">/{product?.name}</span>
      </div>

      <div className={"title"}>{product?.name}</div>
      <div className={s.inner}>
        <div className={s.innerTop}>
          <div className={s.topSlider}>
            <ProductSlider image={product?.img} />
          </div>
          <div className={s.topInfo}>
            <div className={s.infoDescr}>
              {product?.shortDescr}&nbsp;
              <Link
                to={"tabList"}
                activeClass={"active"}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                подробнее
              </Link>
            </div>
            <div className={s.infoCommunication}>
              <div className={s.review} data-rating={product?.recall}>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                {product?.recall}
              </div>
            </div>
            <div className={s.cost}>
              <div className={s.costWrap}>
                <div className={s.price}>
                  Цена:&nbsp;<span>{product?.price}&nbsp;₽</span>
                </div>

                <FavoriteBorderOutlinedIcon className={s.favorites} />
              </div>
            </div>
            <div className={s.buy}>
              <button className={cn("button", s.button)}>В корзину</button>
            </div>
          </div>
        </div>
        <div className={s.productId}>Код товара:&nbsp;{product?._id}</div>
      </div>
      <TabsList product={product} />
    </>
  );
};
