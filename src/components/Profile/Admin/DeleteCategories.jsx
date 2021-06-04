import { Button, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { deleteCategories } from "../../../redux/adminReducer";
import { useState } from "react";
import { setAppMessage } from "../../../redux/appReducer";
import { removeBasket } from "../../../redux/basketReducer";
import { removeFavorites } from "../../../redux/favoriteReducer";
import { SelectInput } from "../../shared/SelectInput";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 5,
  },
  form: {
    display: "flex",
    alignItems: "baseline",
  },
}));

export const DeleteCategories = ({ categories }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [id, setId] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!id) {
      dispatch(setAppMessage("Вы не выбрали категорию!", "error"));
      return;
    }
    let res = await dispatch(deleteCategories(id));
    res.forEach((el) => {
      dispatch(removeBasket(el._id));
      dispatch(removeFavorites(el._id));
    });
    dispatch(setAppMessage("Категория успешно удален!"));
  };

  return (
    <>
      <form onSubmit={onSubmit} noValidate className={classes.form}>
        <SelectInput
          array={categories}
          {...{ id, setId }}
          name={"Имя категории"}
        />
        <Button
          type={"submit"}
          variant="outlined"
          color="primary"
          className={classes.root}
        >
          Удалить
        </Button>
      </form>
    </>
  );
};
