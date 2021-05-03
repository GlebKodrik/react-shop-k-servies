import React from "react";
import s from "../Authorization.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, TextField } from "@material-ui/core";
import { logIn } from "../../../Redux/authReducer";
import { UseFormControl } from "../FormControl";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MaskPhone } from "../../../common/mask";
import { InputField } from "../../../common/inputMaterial";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      marginBottom: theme.spacing(2),
      width: "100%",
    },
  },
  button: {
    textAlign: "center",
    marginBottom: theme.spacing(2),
    "& .MuiButtonBase-root": {
      width: "226px",
    },
  },
  authInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

const SignupSchema = yup.object().shape({
  email: yup.string().required("Обязательное поле").email("Некорректный email"),
  password: yup
    .string()
    .required("Обязательное поле")
    .min(6, "Не менее 6 символов")
    .max(15, "Не более 15 сиволов"),
  name: yup
    .string()
    .required("Обязательное поле")
    .matches(/^[a-zа-яё\s]+$/i, "Недопустимое имя")
    .min(2, "Некорректное имя")
    .max(30, "Некорректное имя"),
  phone: yup
    .string()
    .required("Обязательное поле")
    .transform((value) => {
      return value.replace(/[^0-9]/g, "");
    })
    .min(11, "Некорректный номер телефона"),
});

export const Registration = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    console.log(data);
    dispatch(logIn(data));
  };

  const classes = useStyles();
  return (
    <div className={s.signIn}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classes.root}
        autoComplete="on"
        noValidate
      >
        <TextField
          required
          label="Имя"
          variant="outlined"
          error={!!errors.name}
          helperText={errors.name && errors.name.message}
          {...register("name")}
        />

        <TextField
          required
          label={"E-mail"}
          variant="outlined"
          error={!!errors.email}
          helperText={errors.email && errors.email.message}
          {...register("email")}
        />

        <MaskPhone
          name="phone"
          control={control}
          errors={errors}
          variant="outlined"
          label={"Телефон"}
          placeholder={"+7 (995) 599 31 20"}
        />

        <UseFormControl name="password" control={control} errors={errors} />

        <div className={classes.button}>
          <Button type={"submit"} variant={"outlined"} color={"primary"}>
            Регистрация
          </Button>
        </div>
      </form>
      <div className={classes.authInfo}>
        <div>
          <NavLink to="/login">Войти</NavLink>
        </div>
      </div>
    </div>
  );
};
