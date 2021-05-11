import { Swiper, SwiperSlide } from "swiper/react";
import s from "./Product.module.css";
import SwiperCore, {
  A11y,
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";

SwiperCore.use([Navigation, A11y, Pagination, EffectFade, Autoplay]);

export const ProductSlider = ({ image }) => {
  return (
    <div className={s.slider}>
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        loop={true}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        zoom={true}
      >
        <SwiperSlide className={s.image}>
          <img src={image} alt="Слайдер" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
