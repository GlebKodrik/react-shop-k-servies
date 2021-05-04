import { Slider } from "./Slider/Slider";
import s from "./Main.module.css";
import { Categories } from "./Categories/Categories";

export const Main = () => {
  return (
    <div>
      <Slider />
      <Categories />
    </div>
  );
};
