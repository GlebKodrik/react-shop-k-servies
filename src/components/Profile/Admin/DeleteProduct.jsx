import { useForm } from "react-hook-form";
import { Input } from "../../shared/Input/Input";
import { Button, makeStyles } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../redux/adminReducer";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    alignItems: "baseline",
  },
  button: {
    marginLeft: 5,
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        noValidate
        className={classes.form}
      >
        <Input
          required
          label={"Id продукта"}
          control={control}
          error={!!errors.id}
          helperText={errors.id && errors.id.message}
          name={"id"}
        />
        <div className={classes.button}>
          <Button type={"submit"} variant="outlined" color="primary">
            Удалить
          </Button>
        </div>
      </form>
    </>
  );
};
