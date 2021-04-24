import s from "./Contacts.module.css";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import vk from "./../../../../assets/img/icons/vk1.png";
import inst from "./../../../../assets/img/icons/inst.png";
import { useState } from "react";
import { Modal } from "antd";
import { PopupCallMe } from "../../../Popup/PopupCallMe/PopupCallMe";

export const Contacts = () => {
  const [callMe, setCallMe] = useState(false);
  const styleButton = [cn("button", s.button)];
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
        <button className={styleButton} onClick={() => setCallMe(true)}>
          Позвонить мне
        </button>
        <button className={styleButton}>Задать вопрос</button>
      </div>
      <div className={s.iconSocial}>
        <a href="https://vk.com/k.glebka" target={"_blank"}>
          <img src={vk} alt="Вконтакте" />
        </a>
        <a href="https://www.instagram.com/" target={"_blank"}>
          <img src={inst} alt="Инстаграмм" />
        </a>
      </div>
      {callMe}
      <Modal
        centered
        style={{ top: 20 }}
        visible={callMe}
        footer={null}
        onOk={() => setCallMe(false)}
        onCancel={() => setCallMe(false)}
      >
        <PopupCallMe />
      </Modal>
    </div>
  );
};
