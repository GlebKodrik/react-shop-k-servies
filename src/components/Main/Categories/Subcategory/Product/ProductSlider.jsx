import { Swiper, SwiperSlide } from "swiper/react";
import s from "./Product.module.css";
import SwiperCore, {
  A11y,
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper";
import { useState } from "react";

SwiperCore.use([Navigation, A11y, Pagination, EffectFade, Autoplay, Thumbs]);

export const ProductSlider = ({ image }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={s.slider}>
      {/*<Swiper*/}
      {/*  style={{*/}
      {/*    "--swiper-navigation-color": "#fff",*/}
      {/*    "--swiper-pagination-color": "#fff",*/}
      {/*  }}*/}
      {/*  spaceBetween={10}*/}
      {/*  navigation={true}*/}
      {/*  thumbs={{ swiper: thumbsSwiper }}*/}
      {/*  className="mySwiper2"*/}
      {/*>*/}
      {/*  <SwiperSlide>*/}
      {/*    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />*/}
      {/*  </SwiperSlide>*/}
      {/*  <SwiperSlide>*/}
      {/*    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />*/}
      {/*  </SwiperSlide>*/}
      {/*  <SwiperSlide>*/}
      {/*    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />*/}
      {/*  </SwiperSlide>*/}
      {/*  <SwiperSlide>*/}
      {/*    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />*/}
      {/*  </SwiperSlide>*/}
      {/*  <SwiperSlide>*/}
      {/*    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />*/}
      {/*  </SwiperSlide>*/}
      {/*  <SwiperSlide>*/}
      {/*    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />*/}
      {/*  </SwiperSlide>*/}
      {/*  <SwiperSlide>*/}
      {/*    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />*/}
      {/*  </SwiperSlide>*/}
      {/*  <SwiperSlide>*/}
      {/*    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />*/}
      {/*  </SwiperSlide>*/}
      {/*  <SwiperSlide>*/}
      {/*    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />*/}
      {/*  </SwiperSlide>*/}
      {/*  <SwiperSlide>*/}
      {/*    <img src="https://swiperjs.com/demos/images/nature-10.jpg" />*/}
      {/*  </SwiperSlide>*/}
      {/*</Swiper>*/}
      {/*<Swiper*/}
      {/*  onSwiper={setThumbsSwiper}*/}
      {/*  spaceBetween={10}*/}
      {/*  slidesPerView={4}*/}
      {/*  freeMode={true}*/}
      {/*  watchSlidesVisibility={true}*/}
      {/*  watchSlidesProgress={true}*/}
      {/*  className="mySwiper"*/}
      {/*>*/}
      {/*  <SwiperSlide>*/}
      {/*    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />*/}
      {/*  </SwiperSlide>*/}
      {/*  <SwiperSlide>*/}
      {/*    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />*/}
      {/*  </SwiperSlide>*/}
      {/*  <SwiperSlide>*/}
      {/*    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />*/}
      {/*  </SwiperSlide>*/}
      {/*  <SwiperSlide>*/}
      {/*    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />*/}
      {/*  </SwiperSlide>*/}
      {/*  <SwiperSlide>*/}
      {/*    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />*/}
      {/*  </SwiperSlide>*/}
      {/*  <SwiperSlide>*/}
      {/*    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />*/}
      {/*  </SwiperSlide>*/}
      {/*  <SwiperSlide>*/}
      {/*    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />*/}
      {/*  </SwiperSlide>*/}
      {/*  <SwiperSlide>*/}
      {/*    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />*/}
      {/*  </SwiperSlide>*/}
      {/*  <SwiperSlide>*/}
      {/*    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />*/}
      {/*  </SwiperSlide>*/}
      {/*  <SwiperSlide>*/}
      {/*    <img src="https://swiperjs.com/demos/images/nature-10.jpg" />*/}
      {/*  </SwiperSlide>*/}
      {/*</Swiper>*/}

      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        className={s.mySwiperMain}
      >
        <SwiperSlide className={s.image}>
          <img src={image} alt="Слайдер" />
        </SwiperSlide>
        <SwiperSlide className={s.image}>
          <img src={image} alt="Слайдер" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesVisibility={true}
        watchSlidesProgress={true}
        className={s.mySwiper}
      >
        <SwiperSlide className={s.image}>
          <img src={image} alt="Слайдер" />
        </SwiperSlide>
        <SwiperSlide className={s.image}>
          <img src={image} alt="Слайдер" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
