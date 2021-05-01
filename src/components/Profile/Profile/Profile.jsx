import React, { useState } from "react";
import s from "./Profile.module.css";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { ProfileForm } from "./ProfileForm/ProfileForm";
import noAvatar from "../../../assets/img/noavatar.png";
import { useDispatch, useSelector } from "react-redux";
import { savePhoto } from "../../../Redux/profileReducer";
import { getAvatar } from "../../../Redux/profile-selector";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const SignupSchema = yup.object().shape({
  email: yup.string().required("Обязательное поле").email("Некорректный email"),
  password: yup
    .string()
    .required("Обязательное поле")
    .min(6, "Не менее 6 символов")
    .max(15, "Не более 15 сиволов"),
});

export const Profile = (props) => {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const avatar = useSelector(getAvatar);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
    mode: "onTouched",
  });
  console.log(watch["email"]);
  const onSubmit = (data) => {
    debugger;
    console.log(data);
    setEdit(!edit);
  };

  const onMainPhotoSelected = (e) => {
    const path = e.target.files[0];
    if (path) {
      dispatch(savePhoto(path));
    }
  };
  return (
    <div>
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
                  type={"button"}
                  onClick={(e) => {
                    e.preventDefault();
                    setEdit(!edit);
                  }}
                  variant="contained"
                >
                  Редактировать
                </Button>
              ) : (
                <Button
                  type={"submit"}
                  onClick={() => setEdit(!edit)}
                  variant="contained"
                >
                  Сохранить
                </Button>
              )}
            </div>
          </div>
          <ProfileForm
            {...{
              edit,
              register,
              errors,
            }}
          />
        </form>
      </div>
    </div>
  );
};
