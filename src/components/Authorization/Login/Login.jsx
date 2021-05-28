import React, { useState } from "react";
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
import { PopupToast } from "../../Popup/PopupToast/PopupToast";
import { useDispatch } from "react-redux";
import { meThunk } from "../../../redux/authReducer";
import { authAPI } from "../../../api/api";
import { Input } from "../../shared/Input/Input";

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
  const [state, setState] = useState({
    open: false,
    text: "",
    type: "",
  });
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
      setState({
        open: true,
        text: "Неверный email или пароль",
        type: "error",
      });
      return;
    }
    dispatch(meThunk());
    history.push("/");
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
          {state.open && <PopupToast {...state} setState={setState} />}
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
