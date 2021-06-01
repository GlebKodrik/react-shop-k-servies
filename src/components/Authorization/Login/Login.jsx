import React from "react";
import s from "../Authorization.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { Controller, useForm } from "react-hook-form";
import { NavLink, useHistory } from "react-router-dom";
import { Button, Checkbox, FormControlLabel } from "@material-ui/core";
import { UseFormControl } from "../FormControl";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  emailValidation,
  passwordValidation,
} from "../../../common/validations";
import { useDispatch } from "react-redux";
import { meThunk } from "../../../redux/authReducer";
import { authAPI } from "../../../api/api";
import { Input } from "../../shared/Input/Input";
import { setAppMessage } from "../../../redux/appReducer";

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
}));

const SignupSchema = yup.object().shape({
  ...passwordValidation,
  ...emailValidation,
});

export const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: { remember: true, email: "" },
    resolver: yupResolver(SignupSchema),
    mode: "onTouched",
  });

  const onSubmit = async (values) => {
    const response = await authAPI.logIn({ ...values });
    if (!!response.data.errors) {
      dispatch(setAppMessage("Неверный email или пароль!", "error"));
      return;
    }
    dispatch(meThunk());
    dispatch(setAppMessage("Ура! Вы авторизованы!", "success"));
    history.push("/");
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
        <Input
          required
          autoComplete={"on"}
          type={"email"}
          label={"E-mail"}
          variant="outlined"
          error={!!errors.email}
          helperText={errors.email && errors.email.message}
          name={"email"}
          control={control}
        />

        <UseFormControl name="password" control={control} errors={errors} />

        <Controller
          name={"remember"}
          control={control}
          render={({ field: { onChange, value, ref } }) => {
            return (
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={value}
                    onChange={(e) => onChange(e.target.checked)}
                  />
                }
                label="Запомнить"
              />
            );
          }}
        />

        <div className={classes.button}>
          <Button
            type={"submit"}
            variant={"outlined"}
            color={"primary"}
            className={s.button}
          >
            Войти
          </Button>
        </div>
      </form>
      <div className={s.authInfo}>
        <div>
          <NavLink to="/change">Забыл пароль?</NavLink>
        </div>
        <div>
          <NavLink to="/register">Зарегистрироваться</NavLink>
        </div>
      </div>
    </div>
  );
};
