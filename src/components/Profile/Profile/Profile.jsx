import React, { useState } from "react";
import s from "./ProfileMain.module.css";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { ProfileItem } from "./ProfileItem/ProfileItem";
import noAvatar from "../../../assets/img/noavatar.png";
import { useDispatch, useSelector } from "react-redux";
import { savePhoto } from "../../../Redux/profileReducer";
import { getAvatar } from "../../../Redux/profile-selector";

export const Profile = (props) => {
  const [edit, setEdit] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const avatar = useSelector(getAvatar);

  const onSubmit = (data) => {
    console.log(data);
    setEdit(!edit);
  };
  const toggle = (e) => {
    e.preventDefault();
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
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <div className={s.editData}>
            <div className={s.dataWrapTitle}>Персональные данные</div>
            <div>
              {!edit ? (
                <Button
                  type={"button"}
                  onClick={toggle}
                  variant="contained"
                  color="secondary"
                >
                  Редактировать
                </Button>
              ) : (
                <Button
                  type={"submit"}
                  onClick={toggle}
                  variant="contained"
                  color="secondary"
                >
                  Сохранить
                </Button>
              )}
            </div>
          </div>
          <ProfileItem
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
