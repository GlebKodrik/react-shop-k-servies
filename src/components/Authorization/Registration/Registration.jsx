import React, { useState } from "react";
import s from "../Authorization.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, useFormState } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import { UseFormControl } from "../FormControl";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MaskPhone } from "../../shared/Mask";
import {
  emailValidation,
  nameValidation,
  passwordValidation,
  phoneValidation,
} from "../../../common/validations";
import { PopupToast } from "../../Popup/PopupToast/PopupToast";
import { authAPI } from "../../../api/api";

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
  },
  authInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

const SignupSchema = yup.object().shape({
  ...emailValidation,
  ...passwordValidation,
  ...nameValidation,
  ...phoneValidation,
});

export const Registration = () => {
  const [state, setState] = useState({
    open: false,
    text: "",
    type: "",
  });

  const {
    register,
    handleSubmit,
    control,
    setError,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { phone: "", email: "", name: "" },
    resolver: yupResolver(SignupSchema),
    mode: "onTouched",
  });

  const onSubmit = async (values) => {
    const response = await authAPI.logUp(values);
    let error = response.data.errors;
    if (!!error) {
      console.log(error);
      if (error.email) {
        setError("email", { message: error.email[0] });
      }
      if (error.password) {
        setError("password", { message: error.password[0] });
      }
      setState({ open: true, text: "Ошибка при регистрации", type: "error" });
      return;
    }
    setState({
      open: true,
      text: "Вы успешно зарегистрированы!",
      type: "success",
    });
    reset();
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
          {state.open && <PopupToast {...state} setState={setState} />}
          <Button
            type={"submit"}
            variant={"outlined"}
            color={"primary"}
            className={s.button}
          >
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
