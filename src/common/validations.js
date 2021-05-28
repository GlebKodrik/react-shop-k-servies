import * as yup from "yup";

export const emailValidation = {
  email: yup.string().required("Обязательное поле").email("Некорректный email"),
};

export const descriptionValidation = {
  description: yup.string().required("Обязательное поле").max(2000),
};

export const nameValidation = {
  name: yup
    .string()
    .required("Обязательное поле")
    .matches(/^[a-zа-яё\s]+$/i, "Недопустимое имя")
    .min(2, "Некорректное имя")
    .max(30, "Некорректное имя"),
};

export const subjectValidation = {
  subject: yup
    .string()
    .required("Обязательное поле")
    .matches(/^[a-zа-яё\s]+$/i, "Только буквы")
    .min(4, "Тема должна состоять более 3 символов")
    .max(30, "Тема должна состоять не более 30 символов"),
};
export const phoneValidation = {
  phone: yup
    .string()
    .required("Обязательное поле")
    .transform((value) => {
      return value.replace(/[^0-9]/g, "");
    })
    .min(11, "Некорректный номер телефона"),
};
export const passwordValidation = {
  password: yup
    .string()
    .required("Обязательное поле")
    .min(10, "Не менее 10 символов")
    .max(15, "Не более 15 сиволов"),
};
