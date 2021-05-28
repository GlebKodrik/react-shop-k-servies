import React, { useState } from "react";
import s from "./Profile.module.css";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { ProfileForm } from "./ProfileForm/ProfileForm";
import noAvatar from "../../../assets/img/noavatar.png";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  emailValidation,
  nameValidation,
  phoneValidation,
} from "../../../common/validations";
import { userAPI } from "../../../api/api";
import { PopupToast } from "../../Popup/PopupToast/PopupToast";

const SignupSchema = yup.object().shape({
  ...phoneValidation,
  ...emailValidation,
  ...nameValidation,
});

export const Profile = () => {
  const [state, setState] = useState({
    open: false,
    text: "",
    type: "",
  });
  const user = useSelector((state) => state.user.client);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user?.profile?.nickname || "",
      phone: user?.profile?.phone,
      email: user?.email,
    },
    resolver: yupResolver(SignupSchema),
    mode: "onTouched",
  });

  const onSubmit = async (values) => {
    console.log("тут");
    const response = await userAPI.changeUser({ ...values });
    if (!!response.data.errors) {
      setState({
        open: true,
        text: "Ошибка при редактирование!",
        type: "error",
      });
      return;
    }
    setState({
      open: true,
      text: "Пользователь успешно изменен!",
      type: "success",
    });
    setEdit(!edit);
  };
  const onMainPhotoSelected = (e) => {};
  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="on" noValidate>
      {state.open && <PopupToast {...state} setState={setState} />}
      <div className={["wrapContainer", s.dataWrap].join(" ")}>
        <div>
          <div className={s.avatar}>
            <label className={s.photo__label}>
              <span className={s.photo__text}>Изменить фото</span>
              <input type={"file"} onChange={onMainPhotoSelected} />
            </label>
            <div>
              <img src={noAvatar} alt="" />
            </div>
          </div>
        </div>
        <div className={s.editData}>
          <div className={s.dataWrapTitle}>Персональные данные</div>
          <div>
            {!edit ? (
              <Button
                variant="outlined"
                color="primary"
                type={"button"}
                onClick={(e) => {
                  e.preventDefault();
                  setEdit(!edit);
                }}
              >
                Редактировать
              </Button>
            ) : (
              <Button
                type={!edit ? "button" : "submit"}
                variant="outlined"
                color="primary"
              >
                Сохранить
              </Button>
            )}
          </div>
        </div>
        <ProfileForm
          {...{
            setEdit,
            user,
            control,
            edit,
            register,
            errors,
          }}
        />
      </div>
    </form>
  );
};
