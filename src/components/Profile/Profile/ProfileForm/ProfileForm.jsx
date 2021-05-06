import React from "react";
import s from "../Profile.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { MaskPhone } from "../../../../common/mask";
import { TextField } from "@material-ui/core";
import FaceOutlinedIcon from "@material-ui/icons/FaceOutlined";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";

export const ProfileForm = ({ edit, register, errors, control }) => {
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
          <span className={s.dataTitle}>ФИО</span>
          {edit ? (
            <TextField
              className={classes.dataInfo}
              label="ФИО"
              error={!!errors.name}
              helperText={errors.name && errors.name.message}
              {...register("name")}
            />
          ) : (
            <span className={s.dataInfo}>Кодрик Глеб Михайлович</span>
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
            <span className={s.dataInfo}>89955993130</span>
          )}
          <PhoneIphoneOutlinedIcon className={classes.icon} />
        </label>
        <label className={s.dataItem}>
          <span className={s.dataTitle}>Email</span>
          {edit ? (
            <TextField
              required
              className={classes.dataInfo}
              label="Email"
              error={!!errors.email}
              helperText={errors.email && errors.email.message}
              {...register("email")}
            />
          ) : (
            <span className={s.dataInfo}> kodrikgleb2@mail.ru</span>
          )}
          <EmailOutlinedIcon className={classes.icon} />
        </label>
      </div>
    </>
  );
};
