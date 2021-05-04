import { YMaps, Map, Placemark } from "react-yandex-maps";
import React from "react";
import s from "./Location.module.css";

export const Location = () => {
  const mapState = {
    zoom: 16,
    center: [59.850292, 30.202546],
    controls: ["zoomControl", "fullscreenControl"],
  };

  const placeMark = {
    geometry: [59.850292, 30.202546],
    properties: {
      balloonContent: `<div class="balloon-content">
<h3 class="balloon-content-title">Партнерский&nbsp;пункт выдачи</h3>
<div class="balloon-content-info">Адрес: <span>г.Санкт-Петербург, ул. Маршала Захарова, д.27, к.2</span></div>
<div class="balloon-content-info">Режим работы: <span>Ежедневно 09:00-21:00</span></div></div>`,
    },

    modules: ["geoObject.addon.balloon", "geoObject.addon.hint"],
  };

  return (
    <div>
      <div className="title">Где мы находимся</div>
      <div className={s.subTitle}>
        <b>Адрес:</b> 198330, г.Санкт-Петербург, ул. Маршала Захарова, д.27,
        к.2, лит. А кв.30
      </div>
      <div className={s.map}>
        <YMaps>
          <Map
            options={{ suppressMapOpenBlock: true }}
            width="100%"
            height="100%"
            state={mapState}
            modules={["control.ZoomControl", "control.FullscreenControl"]}
          >
            <Placemark {...placeMark} />
          </Map>
        </YMaps>
      </div>
    </div>
  );
};
