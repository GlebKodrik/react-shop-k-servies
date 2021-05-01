import s from "./Contacts.module.css";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import vk from "./../../../../assets/img/icons/vk1.png";
import inst from "./../../../../assets/img/icons/inst.png";
import { useState } from "react";
import { PopupCallMe } from "../../../Popup/PopupCallMe/PopupCallMe";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { PopupQuestion } from "../../../Popup/PopupQuestion/PopupQuestion";

export const Contacts = () => {
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "none",
    },
    paper: {
      position: "relative",
      fontSize: 14,
      borderRadius: 2,
      width: 520,
      backgroundColor: theme.palette.background.paper,
      boxShadow:
        "0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 5%)",
      pointerEvents: "auto",
      padding: "30px",
      outline: "none",
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    modalStyle: {},
  }));

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [popupQues, setPopupQues] = useState(false);

  const handleOpen = () => {
    setPopupQues(false);
    setOpen(true);
  };

  const openPopupQues = () => {
    setPopupQues(true);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const styleButton = [cn("button", s.button)];
  return (
    <div className={s.contacts}>
      <div className={s.title}>Контакты</div>
      <div className={s.adress}>
        <NavLink to={"/"}>Адрес магазина</NavLink>
      </div>
      <div className={s.wrap_phone}>
        <a href="tel:PHONE_NUM"> +7(995)599-31-30</a>
        <PhoneIphoneIcon />
      </div>
      <div className={s.wrap_button}>
        <button className={styleButton} onClick={handleOpen}>
          Позвонить мне
        </button>
        <button className={styleButton} onClick={openPopupQues}>
          Задать вопрос
        </button>
      </div>
      <div className={s.iconSocial}>
        <a
          href="https://vk.com/k.glebka"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={vk} alt="Вконтакте" />
        </a>
        <a
          href="https://www.instagram.com/"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <img src={inst} alt="Инстаграмм" />
        </a>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {open ? (
              <IconButton
                aria-label="close"
                className={classes.closeButton}
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>
            ) : null}
            {!popupQues ? <PopupCallMe /> : <PopupQuestion />}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
