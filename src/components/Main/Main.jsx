import { Slider } from "./Slider/Slider";
import s from "./Main.module.css";
import { Categories } from "./Categories/Categories";

export const Main = () => {
  return (
    <div className={s.Main}>
      <div className="container">
        <div className={s.MainWrapper}>
          <Slider />
          <Categories />
        </div>
      </div>
    </div>
  );
};
