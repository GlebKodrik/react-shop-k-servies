import s from "./Appeal.module.css";
import { InputField } from "../../../common/model";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React from "react";
import cn from "classnames";

const SignupSchema = yup.object().shape({
  subject: yup
    .string()
    .required("Обязательное поле")
    .matches(/^[a-zа-яё\s]+$/i, "Только буквы")
    .min(4, "Тема должна состоять более 3 символов")
    .max(30, "Тема должна состоять не более 30 символов"),
  description: yup.string().required("Обязательное поле").max(2000),
});

export const Appeal = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <div className={s.wrap}>
        <div onSubmit={handleSubmit(onSubmit)} className={s.form}>
          <form noValidate autoComplete={"on"}>
            <div className={s.formInput}>
              <InputField
                required
                type={"text"}
                label={"Тема обращения"}
                error={!!errors.subject}
                helperText={errors.subject?.message}
                {...register("subject")}
              />
            </div>
            <div className={s.formTextArea}>
              <textarea
                placeholder="Пожалуйста, подробно опишите Ваше обращение. Наиболее полное описание позволит нам предоставить Вам ответ в кратчайшие сроки без уточнения дополнительной информации"
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
            <div className={s.formItemBtn}>
              <button type={"submit"} className={cn("button")}>
                Отправить
              </button>
            </div>
          </form>
        </div>
        <div className={s.info}>
          <div>
            <p className={s.infoText}>
              {" "}
              В этом разделе вы можете оставить свое обращение, если у вас
              возникнут какие-либо проблемы или вопросы по работе
              интернет-магазина К-СЕРВИС.{" "}
            </p>{" "}
            <p className={s.infoBold}>
              Обращения могут быть созданы по следующим темам:
            </p>
            <ol>
              <li>
                Работа с заказом: перенос доставки, отказ от заказа и возврат
                товара.
              </li>
              <li>
                Консультация о доставке заказа, сроках его поступления и
                уточнение дополнительных параметров.
              </li>
              <li>
                Пожелания и замечания по работе сотрудников и ассортименту
                интернет-магазина.
              </li>
              <li>Благодарность за работу курьеров, операторов.</li>
            </ol>
            <p className="attention">
              <span className={s.infoBold}>Обращаем ваше внимание!</span> Ваше
              обращение будет отклонено в случае несоответствия теме.
              Максимальный срок предоставления ответа на обращение составляет 24
              часа.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
