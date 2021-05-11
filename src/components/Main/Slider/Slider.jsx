import { Swiper, SwiperSlide } from "swiper/react";
import { SliderData } from "./SliderData";
import SwiperCore, {
  Navigation,
  A11y,
  Pagination,
  EffectFade,
  Autoplay,
} from "swiper";
import s from "./Slider.module.css";

SwiperCore.use([Navigation, A11y, Pagination, EffectFade, Autoplay]);

export const Slider = () => {
  return (
    <div className={s.content}>
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
      >
        {SliderData.map((slider) => {
          return (
            <SwiperSlide key={slider.id} className={s.swipe}>
              <img src={slider.image} alt="Слайдер" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={s.shadow}>
        <div className={s.shadow__first}></div>
        <div className={s.shadow__last}></div>
      </div>
    </div>
  );
};
