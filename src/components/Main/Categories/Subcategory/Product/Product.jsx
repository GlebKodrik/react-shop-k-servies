import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import { initializedProduct } from "../../../../../redux/productsReducer";
import s from "./Product.module.css";
import { ProductSlider } from "./ProductSlider";
import cn from "classnames";
import { TabsList } from "./TabList/TabsList";
import { Link } from "react-scroll";
import { Rating } from "../../../../shared/Rating/Rating";
import { LikeItem } from "../../../../shared/LikeItem/LikeItem";
import Loader from "../../../../shared/Loader/Loader";
import { addBasket } from "../../../../../redux/basketReducer";

export const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const initialized = useSelector((state) => state.products.isFetching);
  const categories = useSelector((state) => state.products.categories);
  const basket = useSelector((state) => state.basket.basket);
  const product = useSelector((state) => state.products.product);

  useEffect(() => {
    dispatch(initializedProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [dispatch, basket]);

  if (initialized || !product) {
    return <Loader />;
  }

  const actualCategory = categories.find((el) => el._id === product?.rubric);

  const clickAddBasket = () => {
    dispatch(addBasket(product?._id));
  };

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
            <ProductSlider image={product?.images} />
          </div>
          <div className={s.topInfo}>
            <div className={s.infoDescr}>
              {product?.shortDescription}&nbsp;
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
                <LikeItem id={product?._id} />
              </div>
            </div>
            <div className={s.buy}>
              {!!basket.find((el) => el.id === product?._id) ? (
                <NavLink to={"/basket"}>
                  <button className={cn("button", s.buttonBasket, s.button)}>
                    В корзину
                  </button>
                </NavLink>
              ) : (
                <button
                  className={cn("button", s.buttonAdd)}
                  onClick={clickAddBasket}
                >
                  Добавить в корзину
                </button>
              )}
            </div>
          </div>
        </div>
        <div className={s.productId}>Код товара:&nbsp;{product?._id}</div>
      </div>
      <TabsList product={product} />
    </>
  );
};
