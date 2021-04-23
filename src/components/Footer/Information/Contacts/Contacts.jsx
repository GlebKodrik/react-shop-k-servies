import s from "./Contacts.module.css";
import btn from "./../../Footer.module.css";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import vk from "./../../../../assets/img/icons/vk1.png";
import inst from "./../../../../assets/img/icons/inst.png";

export const Contacts = () => {
  const styleButton = [cn(btn.button_main, s.button)];
  return (
    <div className={s.contacts}>
      <div className={s.title}>Контакты</div>
      <div className={s.adress}>
        <NavLink to={"/"}>Адрес магазина</NavLink>
      </div>
      <div className={s.wrap_phone}>
        <a href="tel:PHONE_NUM"> +7(995)599-31-30</a>
        <PhoneIphoneIcon />
      </div>
      <div className={s.wrap_button}>
        <button className={styleButton}>Позвонить мне</button>
        <button className={styleButton}>Задать вопрос</button>
      </div>
      <div className={s.iconSocial}>
        <a href="#" target={"_blank"}>
          <img src={vk} alt="Вконтакте" />
        </a>
        <a href="#" target={"_blank"}>
          <img src={inst} alt="Инстаграмм" />
        </a>
      </div>
    </div>
  );
};
