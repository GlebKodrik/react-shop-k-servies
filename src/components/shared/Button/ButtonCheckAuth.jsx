import s from "./ButtonCheckAuth.module.css";
import { shallowEqual, useSelector } from "react-redux";
import { PopupRecall } from "../../Popup/PopupRecall/PopupRecall";
import { ModalPopup } from "../ModalPopup";
import { useState } from "react";
import { Button } from "@material-ui/core";

export const ButtonCheckAuth = () => {
  const [open, setOpen] = useState(false);
  const auth = useSelector((state) => state.auth.isAuth, shallowEqual);
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <div className={s.auth}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        disabled={!auth}
      >
        Оставить отзыв
      </Button>
      {!auth && <div className="inaccessible">Нужно авторизироваться</div>}
      <ModalPopup component={PopupRecall} {...{ open, setOpen }} />
    </div>
  );
};
