import { Swiper, SwiperSlide } from "swiper/react";
import { SliderData } from "./SliderData";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
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
            <SwiperSlide>
              <div className={s.swipe}>
                <img src={slider.image} alt="Слайдер" />
              </div>
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
