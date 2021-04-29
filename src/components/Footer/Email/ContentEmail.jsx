import s from "../Footer.module.css";
import { InputField } from "../../../common/model";
import { useEffect, useState } from "react";
import cn from "classnames";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const SignupSchema = yup.object().shape({
  email: yup.string().email("Некорректный email").required("Обязательное поле"),
});

export const ContentEmail = () => {
  const [success, setSuccess] = useState(false);
  const [boole, setboole] = useState(true);
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
    console.log(values);
    setSuccess(true);
  };
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
                    <InputField
                      label={"Мой e-mail"}
                      color="secondary"
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
