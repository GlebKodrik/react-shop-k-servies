import cn from "classnames";
import s from "./About.module.css";

export const About = () => {
  return (
    <div>
      <div className={s.advantages}>
        <div className={cn("title", s.advantagesTitle)}>Наши преимущества</div>
        <div className={s.advantagesItem}>
          <div className={s.advantagesTopWrap}>
            <h3 className={s.advantagesTopText}>
              Быстрая и бесплатная доставка
            </h3>
          </div>
        </div>
        <div className={s.advantagesItem}></div>
        <div className={s.advantagesItem}></div>
        <div className={s.advantagesItem}></div>
      </div>
    </div>
  );
};
