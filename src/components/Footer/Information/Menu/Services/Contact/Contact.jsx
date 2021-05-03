import s from "./Contact.module.css";
import cn from "classnames";
import { ModalPopup } from "../../../../../../common/modaPopup";
import { useState } from "react";
import { PopupQuestion } from "../../../../../Popup/PopupQuestion/PopupQuestion";

export const Contact = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className={cn("title", s.title)}>Контакты</div>
      <div className={s.wrap}>
        <div className={cn(s.appeal, s.block)}>
          <div className={cn("title", s.appealTitle)}>Обращения</div>
          <p>Если у Вас возник вопрос – напишите нам</p>
          <ModalPopup component={PopupQuestion} {...{ open, setOpen }} />
        </div>
      </div>
    </div>
  );
};
