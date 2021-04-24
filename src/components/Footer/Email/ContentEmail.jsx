import s from "../Footer.module.css";
import { InputField } from "../../../common/model";
import { useState } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import validator from "validator";
import cn from "classnames";

export const ContentEmail = () => {
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [errorActive, setErrorActive] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateEmail = (e) => {
    let email = e.target.value;
    setEmail(email);
    if (validator.isEmail(email)) {
      setErrorActive(false);
      setDisabled(false);
    } else {
      setErrorActive(true);
      setDisabled(true);
    }
  };

  const handleClick = () => {
    setSuccess(true);
    console.log(email);
  };
  return (
    <div className={s.email_content}>
      <div className={cn(s.email, { [s.email_center]: success })}>
        <div className={s.email_title}>Хочу быть в курсе новинок</div>
        <div className={s.email_body}>
          {!success && (
            <InputField
              color="secondary"
              error={errorActive}
              helperText={errorActive && "Некорректный email"}
              onBlur={() => setErrorActive(false)}
              onChange={(event) => validateEmail(event)}
              label={"Мой e-mail"}
            />
          )}
          {!success && (
            <button
              onClick={handleClick}
              className={cn("button", s.button)}
              disabled={disabled}
            >
              Подписатсья
            </button>
          )}
          {success && (
            <div className={s.success}>
              Вы успешно подписались на нашу рассылку!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
