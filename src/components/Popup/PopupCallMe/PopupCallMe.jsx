import s from "./PopupCallMe.module.css";
import { IMaskPhoneInput, InputField } from "../../../common/model";
import * as Yup from "yup";
import React, { useState } from "react";
import cn from "classnames";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useFormik } from "formik";
import { useForm } from "react-hook-form";

export const PopupCallMe = (props) => {
  const [showDescr, setShowDescr] = useState(false);
  const [value, setValue] = useState("order");

  const handleChangeCheck = (event) => {
    setValue(event.target.value);
  };

  const initialValues = {
    phone: "",
    firstName: "",
    description: "",
  };

  const validationSchema = Yup.object().shape({
    phone: Yup.string()
      .transform((value) => {
        return value.replace(/[^0-9]/g, "");
      })
      .min(11, "Некорректный номер телефона")
      .required("Обязательное поле"),
    firstName: Yup.string()
      .required("Обязательное поле")
      .matches(/^[A-Za-zА-Яа-яЁё]+$/, "Недопустимое имя")
      .min(2, "Недопустимое имя")
      .max(15, "Недопустимое имя")
      .typeError("Некорректное тип"),
  });

  const { register, handleSubmit, errors } = useForm({
    validationSchema,
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  // const formik = useFormik({
  //   initialValues,
  //   onSubmit,
  //   validationSchema,
  // });

  return (
    <div className={s.popup_wrap}>
      <div className={s.title}>Перезвонить мне</div>
      <form onSubmit={formik.handleSubmit} noValidate autoComplete="off">
        <div>
          <IMaskPhoneInput
            autoFocus
            fullWidth
            name={"phone"}
            mask={"+{7} (000) 000-00-00"}
            color="primary"
            label={"Телефон"}
            placeholder={"+7 (950) 356-55-44"}
            error={!!formik.errors.phone && formik.touched.phone}
            helperText={formik.touched.phone && formik.errors.phone}
            {...formik.getFieldProps("phone")}
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
            error={!!formik.errors.firstName && formik.touched.firstName}
            helperText={formik.touched.firstName && formik.errors.firstName}
            {...formik.getFieldProps("firstName")}
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
            {...formik.getFieldProps("description")}
          />
        )}
        <div className={s.wrapButton}>
          <button type={"submit"} className={cn("button", s.button)}>
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
};
