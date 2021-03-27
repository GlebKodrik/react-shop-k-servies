import React from 'react';
import s from './../ProfileMain.module.css';
import {TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

export const ProfileItem = ({edit, register, errors}) => {
    const useStyles = makeStyles((theme) => ({
        dataInfo: {
            marginRight: "10px",
            width: "66%",
        }
    }));
    const classes = useStyles();

    return <div>
        <div className={s.data}>
            <label className={s.dataItem}>
                <span className={s.dataTitle}>ФИО</span>
                {edit ?
                    <TextField className={classes.dataInfo} inputRef={register({required: true})} type={"text"}
                               name={"name"} label="ФИО"
                               variant="filled"
                               defaultValue={"Кодрик Глеб Михайлович"}

                    /> :
                    <span className={s.dataInfo}> Кодрик Глеб Михайлович</span>
                }
                <div className={s.dateDeleteWrap}>
                    <i className="material-icons red-text">create</i>
                </div>
            </label>
            <label className={s.dataItem}>
                <span className={s.dataTitle}>Номер телефона:</span>
                {edit ? <TextField required className={classes.dataInfo} inputRef={register({required: true})}
                                   type={"number"}
                                   name={"number"} label="Номер"
                                   variant="filled"
                                   defaultValue={"89955993130"}

                    /> :
                    <span className={s.dataInfo}> 89955993130</span>
                }
                <div className={s.dateDeleteWrap}>
                    <i className="material-icons red-text">stay_current_portrait</i>
                </div>
            </label>
            <label className={s.dataItem}>
                <span className={s.dataTitle}>Email</span>
                {edit ? <TextField required className={classes.dataInfo} inputRef={register({required: true})}
                                   type={"email"}
                                   name={"email"} label="Email"
                                   variant="filled"
                                   defaultValue={"kodrikgleb2@mail.ru"}

                    /> :
                    <span className={s.dataInfo}> kodrikgleb2@mail.ru</span>
                }
                <div className={s.dateDeleteWrap}>
                    <i className="material-icons red-text">mail_outline</i>
                </div>
            </label>
        </div>
    </div>
}