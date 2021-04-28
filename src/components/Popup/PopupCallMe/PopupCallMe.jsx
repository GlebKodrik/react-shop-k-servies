import s from "./PopupCallMe.module.css";
import { IMaskPhoneInput, InputField } from "../../../common/model";
import React, { useState } from "react";
import cn from "classnames";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Checkbox } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export const PopupCallMe = (props) => {
  const SignupSchema = yup.object().shape({
    phone: yup
      .string()
      .transform((value) => {
        return value.replace(/[^0-9]/g, "");
      })
      .min(11, "Некорректный номер телефона")
      .required("Обязательное поле"),
    firstName: yup
      .string()
      .required("Обязательное поле")
      .matches(/^[A-Za-zА-Яа-яЁё]+$/, "Недопустимое имя")
      .min(2, "Недопустимое имя")
      .max(15, "Недопустимое имя"),
  });
  const [showDescr, setShowDescr] = useState(false);
  const [value, setValue] = useState("order");
  const useStyles = makeStyles((theme) => ({
    label: {
      lineHeight: 1.2,
    },
  }));

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: { checkedData: true },
    resolver: yupResolver(SignupSchema),
    mode: "onTouched",
  });

  const onSubmit = (values) => {
    console.log(values);
    reset();
  };

  const handleChangeCheck = (event) => {
    setValue(event.target.value);
  };

  const classes = useStyles();
  return (
    <div className={s.popup_wrap}>
      <div className={s.title}>Перезвонить мне</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <IMaskPhoneInput
            autoFocus
            fullWidth
            mask={"+{7} (000) 000-00-00"}
            color="primary"
            label={"Телефон"}
            placeholder={"+7 (950) 356-55-44"}
            error={!!errors.phone}
            helperText={errors.phone && errors.phone.message}
            {...register("phone")}
          />
          <div className={s.subtext}>
            Оператор перезвонит в течение 1 часа (с 9:00 до 21:00 по местному
            времени)
          </div>
        </div>

        <div className={s.addName}>
          <InputField
            fullWidth
            name={"firstName"}
            type={"text"}
            label={"Моё имя"}
            placeholder={"Глеб"}
            error={!!errors.firstName}
            helperText={errors.firstName && errors.firstName.message}
            {...register("firstName")}
          />
        </div>

        <div className={s.checkboxes}>
          <RadioGroup
            value={value}
            onChange={handleChangeCheck}
            defaultValue="order"
          >
            <FormControlLabel
              value="order"
              control={<Radio color="primary" />}
              label="Хочу сделать заказ"
              onClick={() => setShowDescr(false)}
            />
            <FormControlLabel
              value="other"
              control={<Radio color="primary" />}
              label="Другое"
              onClick={() => setShowDescr(true)}
            />
          </RadioGroup>
        </div>
        {showDescr && (
          <textarea
            minLength={0}
            className={s.textarea}
            maxLength={1000}
            autoComplete={"off"}
            name={"description"}
            {...register("description")}
          />
        )}

        <Controller
          name={"checkedData"}
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <FormControlLabel
                classes={{
                  label: classes.label,
                }}
                control={
                  <Checkbox
                    onChange={(e) => {
                      onChange(!value);
                    }}
                    checked={value}
                    color="primary"
                  />
                }
                label="Соглашаюсь с условиями обработки персональных данных"
              />
            );
          }}
        />

        <div className={s.wrapButton}>
          <button className={cn("button", s.button)}>Отправить</button>
        </div>
      </form>
    </div>
  );
};
