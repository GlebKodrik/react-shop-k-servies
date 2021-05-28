import s from "../Footer.module.css";
import { useState } from "react";
import cn from "classnames";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField, useTheme } from "@material-ui/core";
import { emailValidation } from "../../../common/validations";

const SignupSchema = yup.object().shape({
  ...emailValidation,
});

export const Email = () => {
  const [success, setSuccess] = useState(false);

  const {
    handleSubmit,
    clearErrors,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: { email: "" },
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = (values) => {
    setSuccess(true);
  };

  const theme = useTheme();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.email_content}>
      <div className={cn(s.email, { [s.email_center]: success })}>
        <div className={s.email_title}>Хочу быть в курсе новинок</div>
        <div className={s.email_body}>
          {!success && (
            <div className={s.email_input}>
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value, ref } }) => {
                  return (
                    <TextField
                      label={"Мой e-mail"}
                      color={
                        errors.email ? theme.palette.error.main : "secondary"
                      }
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      onBlur={() => clearErrors()}
                      value={value}
                      onChange={onChange}
                      ref={ref}
                    />
                  );
                }}
              />
            </div>
          )}
          {!success && (
            <button
              type={"submit"}
              className={cn("button", s.button)}
              disabled={!!errors.email}
            >
              Подписатсья
            </button>
          )}
          {success && (
            <div className={s.success}>
              Вы успешно подписались на нашу рассылку!
            </div>
          )}
        </div>
      </div>
    </form>
  );
};
