import s from "./PopupCallMe.module.css";
import React, { useState } from "react";
import cn from "classnames";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Checkbox } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MaskPhone } from "../../shared/Mask";
import { nameValidation, phoneValidation } from "../../../common/validations";
import { PopupToast } from "../PopupToast/PopupToast";
import { Input } from "../../shared/Input/Input";
import { useDispatch } from "react-redux";
import { sendReceipt } from "../../../redux/basketReducer";

const SignupSchema = yup.object().shape({
  ...phoneValidation,
  ...nameValidation,
});
export const PopupCallMe = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    open: false,
    text: "",
    type: "",
  });
  const [showDescr, setShowDescr] = useState(false);
  const [value, setValue] = useState("order");

  const useStyles = makeStyles((theme) => ({
    label: {
      lineHeight: 1.2,
    },
  }));

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: { checkedData: true, phone: "", nickname: "" },
    shouldFocusError: false,
    resolver: yupResolver(SignupSchema),
    mode: "onTouched",
  });

  const onSubmit = (values) => {
    dispatch(sendReceipt(values));
    reset();
  };

  const handleChangeCheck = (event) => {
    setValue(event.target.value);
  };

  const classes = useStyles();
  return (
    <div className={"popupWrap"}>
      <div className={"popupTitle"}>Перезвонить мне</div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <MaskPhone
            required
            name="phone"
            control={control}
            errors={errors}
            label={"Телефон"}
            placeholder={"+7 (995) 599 31 20"}
          />

          <div className={s.subtext}>
            Оператор перезвонит в течение 1 часа (с 9:00 до 21:00 по местному
            времени)
          </div>
        </div>

        <div className={s.addName}>
          <Input
            required
            label={"Моё имя"}
            placeholder={"Глеб"}
            error={!!errors.nickname}
            helperText={errors.nickname && errors.nickname.message}
            name={"nickname"}
            control={control}
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
            className={"popupTextarea"}
            maxLength={1000}
            autoComplete={"off"}
            {...register("description")}
          />
        )}
        <div>
          <Controller
            name={"checkedData"}
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <FormControlLabel
                  classes={{
                    label: classes.label,
                  }}
                  control={
                    <Checkbox
                      onChange={(e) => {
                        onChange(!value);
                      }}
                      checked={value}
                      color="primary"
                    />
                  }
                  label="Соглашаюсь с условиями обработки персональных данных"
                />
              );
            }}
          />
        </div>

        <div className={cn("popupWrapButton")}>
          {state && <PopupToast {...state} setState={setState} />}
          <button className={cn("button", "popupButton")}>Отправить</button>
        </div>
      </form>
    </div>
  );
};
