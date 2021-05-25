import React, { useState } from "react";
import s from "./Profile.module.css";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { ProfileForm } from "./ProfileForm/ProfileForm";
import noAvatar from "../../../assets/img/noavatar.png";
import { useDispatch, useSelector } from "react-redux";
import { savePhoto } from "../../../redux/profileReducer";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  emailValidation,
  nameValidation,
  phoneValidation,
} from "../../../common/validations";

const SignupSchema = yup.object().shape({
  ...phoneValidation,
  ...emailValidation,
  ...nameValidation,
});

export const Profile = () => {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const avatar = useSelector((state) => state.profilePage.avatar);
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
    setEdit(!edit);
  };

  const onMainPhotoSelected = (e) => {
    const path = e.target.files[0];
    console.log(path);
    if (path) {
      dispatch(savePhoto(path));
    }
  };
  return (
    <>
      <div className={["wrapContainer", s.dataWrap].join(" ")}>
        <div>
          <div className={s.avatar}>
            <label className={s.photo__label}>
              <span className={s.photo__text}>Изменить фото</span>
              <input
                id="file-input"
                type={"file"}
                onChange={onMainPhotoSelected}
              />
            </label>
            <div>
              <img src={avatar || noAvatar} alt="" />
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} autoComplete="on" noValidate>
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
              control,
              edit,
              register,
              errors,
            }}
          />
        </form>
      </div>
    </>
  );
};
