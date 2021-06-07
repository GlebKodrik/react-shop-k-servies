import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import s from "./PopupBuy.module.css";
import cn from "classnames";
import * as yup from "yup";
import { nameValidation, phoneValidation } from "../../../common/validations";
import { MaskPhone } from "../../shared/Mask";
import React from "react";
import { Input } from "../../shared/Input/Input";
import { sendReceipt } from "../../../redux/basketReducer";
import { useDispatch } from "react-redux";

const SignupSchema = yup.object().shape({
  ...nameValidation,
  ...phoneValidation,
});

export const PopupBuy = ({ basket, ...props }) => {
  const dispatch = useDispatch();

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: { phone: "", nickname: "" },
    resolver: yupResolver(SignupSchema),
    mode: "onTouched",
  });

  const onSubmit = async (values) => {
    const arr = basket.map((el) => {
      return el.id;
    });
    await dispatch(sendReceipt({ products: arr, ...values }));
    props.setOpen(false);
    reset();
  };

  return (
    <div className={"popupWrap"}>
      <div className={cn("popupTitle", s.title)}>Оформить заказ</div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={s.phone}>
          <Input
            required
            label={"Имя"}
            error={!!errors.nickname}
            helperText={errors.nickname?.message}
            control={control}
            name={"nickname"}
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
        <div className={cn("popupWrapButton")}>
          <button className={cn("button", "popupButton")}>Отправить</button>
        </div>
      </form>
    </div>
  );
};
