import s from "./Information.module.css";
import { Info } from "./Info/Info";
import { Menu } from "./Menu/Menu";

export const Information = () => {
  return (
    <div className={s.information}>
      <div className={s.wrap}>
        <Info />
        <Menu />
      </div>
      <div className={s.subText}>© К-сервис, 2008–2021</div>
    </div>
  );
};
