import s from "../Footer.module.css";
import { useState } from "react";
import cn from "classnames";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField } from "@material-ui/core";
import { emailValidation } from "../../../common/validations";
import { useDispatch } from "react-redux";
import { sendReceipt } from "../../../redux/basketReducer";

const SignupSchema = yup.object().shape({
  ...emailValidation,
});

export const Email = () => {
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const {
    handleSubmit,
    clearErrors,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: { email: "", nickname: "нет", phone: "нет" },
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = async (values) => {
    await dispatch(sendReceipt(values));
    setSuccess(true);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={s.email_content}
      noValidate
    >
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
                      color={"secondary"}
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
