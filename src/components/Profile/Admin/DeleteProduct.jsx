import { useForm } from "react-hook-form";
import { Input } from "../../shared/Input/Input";
import { Button, makeStyles } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import s from "./Admin.module.css";
import cn from "classnames";
import { deleteProduct } from "../../../redux/adminReducer";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 20,
  },
}));

export const DeleteProduct = ({ error, isDone }) => {
  const dispatch = useDispatch();

  const classes = useStyles();
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: { id: "" },
    resolver: yupResolver(
      yup.object().shape({
        id: yup.string().required("Обязательное поле"),
      })
    ),
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    dispatch(deleteProduct(data));
    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" noValidate>
        <Input
          required
          label={"Id продукта"}
          control={control}
          error={!!errors.id}
          helperText={errors.id && errors.id.message}
          name={"id"}
          className={classes.root}
        />
        <Button
          type={"submit"}
          variant="outlined"
          color="primary"
          className={classes.root}
        >
          Удалить
        </Button>
        {!!error && <div className={cn("inaccessible", s.error)}>{error}</div>}
        {isDone && <div className={"success"}>Товар успешно удален!</div>}
      </form>
    </>
  );
};
