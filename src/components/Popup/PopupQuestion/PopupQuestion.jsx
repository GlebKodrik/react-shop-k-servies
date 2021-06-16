import s from "./PopupQuestion.module.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import cn from "classnames";

import {
  descriptionValidation,
  emailValidation,
  nameValidation,
  subjectValidation,
} from "../../../common/validations";
import { PopupToast } from "../PopupToast/PopupToast";
import { Input } from "../../shared/Input/Input";
import { sendReceipt } from "../../../redux/basketReducer";
import { useDispatch } from "react-redux";

const SignupSchema = yup.object().shape({
  ...emailValidation,
  ...nameValidation,
  ...subjectValidation,
  ...descriptionValidation,
});

export const PopupQuestion = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    open: false,
    text: "",
    type: "",
  });
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: { nickname: "", email: "", subject: "", phone: "нет" },
    resolver: yupResolver(SignupSchema),
    mode: "onTouched",
  });

  const onSubmit = (values) => {
    dispatch(sendReceipt(values));
    reset();
  };

  return (
    <div className={"popupWrap"}>
      <div className={"popupTitle"}>Обратная связь</div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={s.name}>
          <Input
            required
            type={"text"}
            label={"Имя"}
            error={!!errors.nickname}
            helperText={errors.nickname?.message}
            name={"nickname"}
            control={control}
          />
        </div>
        <div className={s.subject}>
          <Input
            required
            type={"text"}
            label={"Тема обращения"}
            error={!!errors.subject}
            helperText={errors.subject?.message}
            name={"subject"}
            control={control}
          />
        </div>
        <div className={s.appeal}>
          <textarea
            className={cn("popupTextarea", {
              textareaError: !!errors.description,
            })}
            autoComplete={"off"}
            {...register("description")}
          />
          <div
            className={cn("subTextarea", {
              subTextareaError: !!errors.description,
            })}
          >
            Сообщение до 2000 символов
          </div>
        </div>

        <div>
          <Input
            required
            label={"Email"}
            error={!!errors.email}
            helperText={errors.email?.message}
            name={"email"}
            control={control}
          />
          <div className={s.subEmail}>Оператор ответит в течение 48 часов</div>
        </div>

        <div className={cn("popupWrapButton")}>
          {state && <PopupToast {...state} setState={setState} />}
          <button className={cn("button", "popupButton")}>Отправить</button>
        </div>
      </form>
    </div>
  );
};
