import s from "./PopupQuestion.module.css";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { InputField } from "../../../common/model";
import cn from "classnames";

const SignupSchema = yup.object().shape({
  name: yup
    .string()
    .required("Обязательное поле")
    .matches(/^[a-zа-яё\s]+$/i, "Недопустимое имя")
    .min(2, "Некорректное имя")
    .max(30, "Некорректное имя"),
  subject: yup
    .string()
    .required("Обязательное поле")
    .matches(/^[a-zа-яё\s]+$/i, "Только буквы")
    .min(4, "Тема должна состоять более 3 символов")
    .max(30, "Тема должна состоять не более 30 символов"),
  email: yup.string().required("Обязательное поле").email("Некорректный email"),
  description: yup.string().required("Обязательное поле").max(2000),
});

export const PopupQuestion = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
    mode: "onTouched",
  });

  const onSubmit = (values) => {
    console.log(values);
    reset();
  };

  return (
    <div className={"popupWrap"}>
      <div className={"popupTitle"}>Обратная связь</div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={s.name}>
          <InputField
            required
            type={"text"}
            label={"Имя"}
            error={!!errors.name}
            helperText={errors.name?.message}
            {...register("name")}
          />
        </div>
        <div className={s.subject}>
          <InputField
            required
            type={"text"}
            label={"Тема обращения"}
            error={!!errors.subject}
            helperText={errors.subject?.message}
            {...register("subject")}
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
          <InputField
            required
            label={"Email"}
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register("email")}
          />
          <div className={s.subEmail}>Оператор ответит в течение 48 часов</div>
        </div>

        <div className={"popupWrapButton"}>
          <button className={cn("button", "popupButton")}>Отправить</button>
        </div>
      </form>
    </div>
  );
};
