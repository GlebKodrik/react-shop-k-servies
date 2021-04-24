import s from "./PopupCallMe.module.css";
import { IMaskPhoneInput, InputField } from "../../../common/model";
import { useForm } from "react-hook-form";
import { useState } from "react";
import cn from "classnames";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export const PopupCallMe = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const [phone, setPhone] = useState("");

  const [value, setValue] = useState("order");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={s.popup_wrap}>
      <div className={s.title}>Перезвонить мне</div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
        <div>
          <IMaskPhoneInput
            fullWidth
            color="primary"
            mask={"+{7}(000)000-00-00"}
            required
            value={phone}
            name={"phone"}
            label={"Телефон"}
            // error={errorActive}
            // helperText={errorActive && "Некорректный email"}
            // onBlur={() => setErrorActive(false)}
            // onChange={(event) => validateEmail(event)}
            // {...{ theme }}
          />
          <div className={s.subtext}>
            Оператор перезвонит в течение 1 часа (с 9:00 до 21:00 по местному
            времени)
          </div>
        </div>

        <div className={s.addName}>
          <InputField
            fullWidth
            required
            type={"text"}
            name={"nickName"}
            label={"Моё имя"}
          />
        </div>

        <div className={s.checkboxes}>
          <RadioGroup
            value={value}
            onChange={handleChange}
            defaultValue="order"
          >
            <FormControlLabel
              value="order"
              control={<Radio color="primary" />}
              label="Хочу сделать заказ"
            />
            <FormControlLabel
              value="other"
              control={<Radio color="primary" />}
              label="Другое"
            />
          </RadioGroup>
        </div>

        <button type={"submit"} className={cn("button", s.button)}>
          Отправить
        </button>
      </form>
    </div>
  );
};
