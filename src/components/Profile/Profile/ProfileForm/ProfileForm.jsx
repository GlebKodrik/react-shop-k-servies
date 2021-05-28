import React from "react";
import s from "../Profile.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { MaskPhone } from "../../../shared/Mask";
import FaceOutlinedIcon from "@material-ui/icons/FaceOutlined";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import { Input } from "../../../shared/Input/Input";

export const ProfileForm = ({ edit, errors, control, user, setEdit }) => {
  const useStyles = makeStyles(() => ({
    icon: {
      fontSize: 26,
      color: "#636363",
    },
    dataInfo: {
      marginRight: "10px",
      width: "66%",
    },
  }));
  const classes = useStyles();

  return (
    <>
      <div className={s.data}>
        <label className={s.dataItem}>
          <span className={s.dataTitle}>Имя</span>
          {edit ? (
            <Input
              required
              className={classes.dataInfo}
              label="Имя"
              error={!!errors.name}
              helperText={errors.name && errors.name.message}
              name={"name"}
              control={control}
            />
          ) : (
            <span className={s.dataInfo}>
              {user?.profile?.nickname || "не указан"}
            </span>
          )}
          <div>
            <FaceOutlinedIcon className={classes.icon} />
          </div>
        </label>
        <label className={s.dataItem}>
          <span className={s.dataTitle}>Номер телефона:</span>
          {edit ? (
            <MaskPhone
              required
              name="phone"
              control={control}
              className={classes.dataInfo}
              label="Номер"
              errors={errors}
            />
          ) : (
            <span className={s.dataInfo}>{user?.profile?.phone}</span>
          )}
          <PhoneIphoneOutlinedIcon className={classes.icon} />
        </label>
        <label className={s.dataItem}>
          <span className={s.dataTitle}>Email</span>
          {edit ? (
            <Input
              required
              className={classes.dataInfo}
              label="Email"
              error={!!errors.email}
              helperText={errors.email && errors.email.message}
              name={"email"}
              control={control}
            />
          ) : (
            <span className={s.dataInfo}>{user?.email}</span>
          )}
          <EmailOutlinedIcon className={classes.icon} />
        </label>
        {edit && (
          <div className={s.cansel} onClick={() => setEdit(!edit)}>
            Отменить редактирование
          </div>
        )}
      </div>
    </>
  );
};
