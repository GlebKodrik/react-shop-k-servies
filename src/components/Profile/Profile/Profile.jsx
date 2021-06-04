import React, { useEffect, useState } from "react";
import s from "./Profile.module.css";
import { Avatar, Button, makeStyles } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { ProfileForm } from "./ProfileForm/ProfileForm";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import cn from "classnames";

import {
  emailValidation,
  nameValidation,
  phoneValidation,
} from "../../../common/validations";
import { urlApi } from "../../../common/urlApi";
import { changeUser, setEdit } from "../../../redux/userReducer";
import Loader from "../../shared/Loader/Loader";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(18.8),
    height: theme.spacing(18.8),
  },
}));

const SignupSchema = yup.object().shape({
  ...phoneValidation,
  ...emailValidation,
  ...nameValidation,
});

export const Profile = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isFetching = useSelector((state) => state.user.isFetching);
  const user = useSelector((state) => state.user.client);
  const edit = useSelector((state) => state.user.edit);
  const [preview, setPreview] = useState({ file: null });

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nickname: user?.profile?.nickname,
      phone: user?.profile?.phone,
      email: user?.email,
    },
    resolver: yupResolver(SignupSchema),
    mode: "onChange",
  });

  useEffect(() => {
    reset({
      nickname: user?.profile?.nickname,
      phone: user?.profile?.phone,
      email: user?.email,
    });
  }, [reset, user]);

  const onSubmit = async (data) => {
    const error = await dispatch(changeUser(data));
    if (!error) {
      dispatch(setEdit(false));
    }
  };
  if (isFetching) {
    return <Loader />;
  }
  const onMainPhotoSelected = (e) => {
    let file = e.currentTarget.files[0];
    setPreview({ file: URL.createObjectURL(file) });
    setValue("avatar", file);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="on" noValidate>
      <div className={["wrapContainer", s.dataWrap].join(" ")}>
        <div>
          <div className={cn(s.avatar, { [s.icon]: edit })}>
            {edit && (
              <label className={s.photo__label}>
                <span className={s.photo__text}>Изменить фото</span>
                <input
                  accept="image/*"
                  type={"file"}
                  onChange={onMainPhotoSelected}
                />
              </label>
            )}
            <div>
              <Avatar
                alt={""}
                src={preview.file || `${urlApi}${user.profile.avatar}`}
                className={classes.large}
              />
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
                onClick={() => {
                  dispatch(setEdit(true));
                }}
              >
                Редактировать
              </Button>
            ) : (
              <div className={s.loading}>
                <Button type={"submit"} variant="outlined" color="primary">
                  Сохранить
                </Button>
              </div>
            )}
          </div>
        </div>
        <ProfileForm
          setEdit={() => dispatch(setEdit(false))}
          {...{
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
