import s from "./Information.module.css";
import { Contacts } from "./Contacts/Contacts";
import { Menu } from "./Menu/Menu";

export const Information = () => {
  return (
    <div className={s.information}>
      <div className={s.wrap}>
        <Contacts />
        <Menu />
      </div>
      <div className={s.subText}>© К-сервис, 2008–2021</div>
    </div>
  );
};
