import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../../../../../Redux/productsReducer";
import s from "./Product.module.css";
import { ProductSlider } from "./ProductSlider";
import cn from "classnames";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { TabsList } from "./TabList/TabsList";
import { Link } from "react-scroll";
import { Rating } from "../../../../Rating/Rating";
import FavoriteIcon from "@material-ui/icons/Favorite";

export const Product = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.products.products).find(
    (el) => el._id === parseInt(params.id)
  );
  const actualCategory = useSelector((state) => state.products.categories).find(
    (el) => el._id === product?.categoryId
  );
  const [favor, setFavor] = useState(false);

  useEffect(() => {
    if (!product) {
      dispatch(getProducts());
    }
  }, [params.id, dispatch, product]);
  const handelClick = () => {
    setFavor(!favor);
    // localStorage.setItem("Favorite", JSON.stringify(product._id));
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
                {favor ? (
                  <FavoriteIcon className={s.favorites} onClick={handelClick} />
                ) : (
                  <FavoriteBorderOutlinedIcon
                    className={s.favorites}
                    onClick={handelClick}
                  />
                )}
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
