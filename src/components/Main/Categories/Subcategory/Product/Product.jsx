import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProducts } from "../../../../../Redux/productsReducer";
import s from "./Product.module.css";
import { ProductSlider } from "./ProductSlider";
import cn from "classnames";
import { TabsList } from "./TabList/TabsList";
import { Link } from "react-scroll";
import { Rating } from "../../../../../common/Rating/Rating";
import { Like } from "../../../../Like/Like";

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
  }, [dispatch, product]);

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
            <Rating rating={product?.recall} />
            <div className={s.cost}>
              <div className={s.costWrap}>
                <div className={s.price}>
                  Цена:&nbsp;<span>{product?.price}&nbsp;₽</span>
                </div>
                <Like id={product?._id} />
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
