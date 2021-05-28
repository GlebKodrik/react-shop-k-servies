import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import cn from "classnames";
import { TextField } from "@material-ui/core";
import {
  descriptionValidation,
  nameValidation,
} from "../../../common/validations";
import s from "./PopupRecall.module.css";
import React, { useState } from "react";
const SignupSchema = yup.object().shape({
  ...nameValidation,
  ...descriptionValidation,
  plus: yup.string().required("Обязательное поле").max(2000),
  limitations: yup.string().required("Обязательное поле").max(2000),
});

export const PopupRecall = () => {
  const [send, setSend] = useState(false);
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
    reset();
    setSend(true);
  };

  return (
    <div style={{ overflow: "auto", maxHeight: 600, marginTop: 40 }}>
      <div className={s.wrap}>
        <div className={s.content}>
          <div className={"popupTitle"}>Новый отзыв</div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className={s.item}>
                <TextField
                  required
                  type={"text"}
                  label={"Имя"}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  {...register("name")}
                />
              </div>
              <div className={s.item}>
                <div className={cn("subTextarea")}>Достоинства(если есть)</div>
                <textarea
                  className={cn("popupTextarea", {
                    textareaError: !!errors.plus,
                  })}
                  autoComplete={"off"}
                  {...register("plus")}
                />
                <div className={cn("subTextarea")}>
                  Сообщение до 2000 символов
                </div>
              </div>

              <div className={s.item}>
                <div className={cn("subTextarea")}>Недостатки(если есть)</div>
                <textarea
                  className={cn("popupTextarea", {
                    textareaError: !!errors.limitations,
                  })}
                  autoComplete={"off"}
                  {...register("limitations")}
                />
                <div
                  className={cn("subTextarea", {
                    subTextareaError: !!errors.limitations,
                  })}
                >
                  Сообщение до 2000 символов
                </div>
              </div>

              <div className={s.item}>
                <div className={cn("subTextarea")}>Комментарий</div>
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

              <div className={cn("popupWrapButton", { popupSend: send })}>
                {send && (
                  <div className={"popupSendText"}>
                    Заявка успешно отправлена
                  </div>
                )}
                <button className={cn("button", "popupButton")}>
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
