import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import s from "./PopupBuy.module.css";
import { TextField } from "@material-ui/core";
import cn from "classnames";
import * as yup from "yup";
import { nameValidation, phoneValidation } from "../../../common/validations";
import { MaskPhone } from "../../shared/Mask";
import React, { useState } from "react";

const SignupSchema = yup.object().shape({
  ...nameValidation,
  ...phoneValidation,
});

export const PopupBuy = () => {
  const [send, setSend] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: { phone: "" },
    resolver: yupResolver(SignupSchema),
    mode: "onTouched",
  });

  const onSubmit = (values) => {
    console.log(values);
    reset();
    setSend(true);
  };

  return (
    <div className={"popupWrap"}>
      <div className={cn("popupTitle", s.title)}>Оформить заказ</div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={s.phone}>
          <TextField
            required
            type={"text"}
            label={"Имя"}
            error={!!errors.name}
            helperText={errors.name?.message}
            {...register("name")}
          />
        </div>
        <div>
          <MaskPhone
            required
            name="phone"
            control={control}
            errors={errors}
            label={"Телефон"}
            placeholder={"+7 (995) 599 31 20"}
          />
        </div>

        <div className={s.subtext}>
          Оператор перезвонит в течение 1 часа (с 9:00 до 21:00 по местному
          времени)
        </div>
        <div className={cn("popupWrapButton", { popupSend: send })}>
          {send && (
            <div className={"popupSendText"}>Заявка успешно отправлена</div>
          )}
          <button className={cn("button", "popupButton")}>Отправить</button>
        </div>
      </form>
    </div>
  );
};
