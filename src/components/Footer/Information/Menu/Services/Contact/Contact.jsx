import s from "./Contact.module.css";
import cn from "classnames";
import { ModalPopup } from "../../../../../../common/modaPopup";
import { useState } from "react";
import { PopupQuestion } from "../../../../../Popup/PopupQuestion/PopupQuestion";
import { PopupCallMe } from "../../../../../Popup/PopupCallMe/PopupCallMe";

export const Contact = () => {
  const [open, setOpen] = useState({ value: false, callMe: false });
  return (
    <div>
      <div className={cn("title", s.title)}>Контакты</div>
      <div className={s.wrap}>
        <div className={cn(s.appeal, s.block)}>
          <div>
            <div className={cn("title", s.appealTitle)}>Обращения</div>
            <p className={s.appealText}>
              Если у Вас возник вопрос – <br />{" "}
              <span
                className={s.underline}
                onClick={() => setOpen({ value: true, callMe: false })}
              >
                напишите нам
              </span>{" "}
            </p>
            <button
              className={s.button}
              onClick={() => setOpen({ value: true, callMe: true })}
            >
              Позвонить мне
            </button>
            <p>
              Если есть какие-то вопросы , можете <br />
              позвонить нам по телефону{" "}
              <span className={s.underline}>
                <a href="tel:PHONE_NUM">+7 (995) 599-31-30</a>
              </span>
            </p>

            <div className={s.appealIcon}></div>
          </div>
          <div></div>
          <ModalPopup
            component={open.callMe ? PopupCallMe : PopupQuestion}
            open={open.value}
            {...{ setOpen }}
          />
        </div>
        <div className={s.blahWrap}>
          <div className={cn(s.blah, s.block)}>
            <div className={s.blahTitle}>Официальные запросы</div>

            <p className={s.blahSubTitle}>
              Для отправки или получения деловой документации
            </p>
            <a href="mailto:k-cervis@yandex.ru" className={s.linkEmail}>
              k-cervis@yandex.ru
            </a>
          </div>
          <div className={cn(s.blah, s.block)}>
            <div className={s.blahTitle}>Юридический адреc</div>

            <p className={s.blahAdress}>
              142181, Московская область, г. Подольск, деревня Коледино,
              Территория Индустриальный парк Коледино, д. 6, стр. 1
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
