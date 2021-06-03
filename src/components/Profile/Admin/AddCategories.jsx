import { Button, Grid, makeStyles } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { Input } from "../../shared/Input/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { setAppMessage } from "../../../redux/appReducer";
import { createCategories } from "../../../redux/adminReducer";
import { namesValidation } from "../../../common/validations";

const SignupSchema = yup.object().shape({
  ...namesValidation,
  url: yup
    .string()
    .required("Обязательное поле!")
    .matches(/^[A-Za-z\s-]+$/i, "Неккоренктный url(только англиские буквы)."),
});

const useStyles = makeStyles((theme) => ({
  form: {
    width: 300,
  },
  item: {
    marginBottom: 20,
  },
}));

export const AddCategories = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const {
    handleSubmit,
    reset,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: { name: "", url: "" },
    resolver: yupResolver(SignupSchema),
    mode: "onTouched",
  });

  const onSubmit = (values) => {
    if (!getValues("image")) {
      dispatch(setAppMessage("Добавьте фото категории!", "error"));
      return;
    }
    dispatch(createCategories(values));
    reset();
  };

  const onMainPhotoSelected = (e) => {
    let file = e.currentTarget.files[0];
    setValue("image", file);
  };

  return (
    <>
      <Grid
        container
        direction="row-reverse"
        justify="flex-start"
        alignItems="flex-start"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
          noValidate
          className={classes.form}
        >
          <Input
            label={"Имя категории"}
            control={control}
            error={!!errors.name}
            helperText={errors.name && errors.name.message}
            name={"name"}
            className={classes.item}
          />
          <Input
            label={"Имя url пути"}
            control={control}
            error={!!errors.url}
            helperText={errors.url && errors.url.message}
            name={"url"}
            className={classes.item}
          />
          <input
            type="file"
            accept=".jpg, .jpeg, .png"
            className={classes.item}
            onChange={onMainPhotoSelected}
          />
          <Button
            variant="outlined"
            color="primary"
            type={"submit"}
            className={classes.item}
          >
            Создать
          </Button>
        </form>
      </Grid>
    </>
  );
};
