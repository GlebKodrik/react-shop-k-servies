import React from "react";
import s from "../Authorization.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { Controller, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../../../Redux/authReducer";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@material-ui/core";
import { UseFormControl } from "../FormControl";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  emailValidation,
  passwordValidation,
} from "../../../common/validations";

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
}));

const SignupSchema = yup.object().shape({
  ...passwordValidation,
  ...emailValidation,
});

export const Login = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: { remember: true },
    resolver: yupResolver(SignupSchema),
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    dispatch(logIn(data));
  };

  const classes = useStyles();
  return (
    <div className={s.signIn}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classes.root}
        autoComplete="off"
        noValidate
      >
        <TextField
          required
          autoComplete={"on"}
          type={"email"}
          label={"E-mail"}
          variant="outlined"
          error={!!errors.email}
          helperText={errors.email && errors.email.message}
          {...register("email")}
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
          <Button type={"submit"} variant={"outlined"} color={"primary"}>
            Войти
          </Button>
        </div>
      </form>
      <div className={s.authInfo}>
        <div>
          <NavLink to="/change">Забыл пароль?</NavLink>
        </div>
        <div>
          <NavLink to="/register">Регистрироваться</NavLink>
        </div>
      </div>
    </div>
  );
};
