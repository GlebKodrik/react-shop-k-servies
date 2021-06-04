import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { setAppMessage } from "../../../redux/appReducer";
import { createProduct } from "../../../redux/adminReducer";
import { Button, Grid, makeStyles } from "@material-ui/core";
import { Input } from "../../shared/Input/Input";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { SelectInput } from "../../shared/SelectInput";
import { useState } from "react";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import { namesValidation } from "../../../common/validations";
import BackspaceIcon from "@material-ui/icons/Backspace";

const SignupSchema = yup.object().shape({
  ...namesValidation,
  description: yup.string().required("Обязательное поле!"),
  shortDescription: yup.string().required("Обязательное поле!"),
  price: yup.number().typeError("Только число!").required("Обязательное поле!"),
});

const useStyles = makeStyles((theme) => ({
  wrap: {
    display: "flex",
    alignItems: "center",
    marginBottom: 20,
  },
  form: {
    width: 300,
  },
  item: {
    marginBottom: 20,
  },
  icon: {
    fontSize: 32,
  },
  delete: {
    fontSize: 18,
    color: "red",
  },
}));

export const AddProduct = ({ categories }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [id, setId] = useState("");

  const [state, setState] = useState([
    { id: 1, file: null },
    { id: 2, file: null },
  ]);

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      shortDescription: "",
      description: "",
      price: "",
    },
    resolver: yupResolver(SignupSchema),
    mode: "onTouched",
  });

  const onSubmit = (values) => {
    const filtered = state.filter((el) => el.file != null);

    if (!filtered.length) {
      dispatch(setAppMessage("Добавьте фото товара! (от 2 штук)", "error"));
      return;
    }

    if (!id) {
      dispatch(setAppMessage("Выберете категорию!", "error"));
      return;
    }

    dispatch(createProduct({ rubric: id, images: filtered, ...values }));
    setState([
      { id: 1, file: null },
      { id: 2, file: null },
    ]);
    reset();
  };

  const onMainPhotoSelected = (e, index) => {
    let file = e.currentTarget.files[0];

    const newList = state.map((el) => {
      if (el.id === index) {
        return { id: index, file: file };
      }
      return el;
    });
    setState(newList);
  };

  const removePhoto = (id) => {
    setState(state.filter((el) => el.id !== id));
  };

  const addImage = () => {
    if (state.length < 10) {
      setState([...state, { id: Date.now(), file: null }]);
      return;
    }
    dispatch(setAppMessage("Слишком много фотографий!", "error"));
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
            label={"Имя продукта"}
            control={control}
            error={!!errors.name}
            helperText={errors.name && errors.name.message}
            name={"name"}
            className={classes.item}
          />
          <Input
            label={"Краткое описание"}
            control={control}
            error={!!errors.shortDescription}
            helperText={
              errors.shortDescription && errors.shortDescription.message
            }
            name={"shortDescription"}
            className={classes.item}
          />
          <Input
            label={"Описание"}
            control={control}
            error={!!errors.description}
            helperText={errors.description && errors.description.message}
            name={"description"}
            className={classes.item}
          />
          <Input
            placeholder={"0"}
            type="number"
            label={"Цена"}
            control={control}
            error={!!errors.price}
            helperText={errors.price && errors.price.message}
            name={"price"}
            className={classes.item}
          />
          <div className={classes.item}>
            <SelectInput
              array={categories}
              {...{ id, setId }}
              name={"Имя категории"}
            />
          </div>
          {state.map((el, index) => {
            return (
              <div key={index} className={classes.wrap}>
                <input
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  onChange={(e) => onMainPhotoSelected(e, el.id)}
                />

                <BackspaceIcon
                  className={classes.delete}
                  onClick={() => removePhoto(el.id)}
                />
              </div>
            );
          })}
          <div className={classes.item}>
            <AddBoxOutlinedIcon
              className={classes.icon}
              color="primary"
              onClick={addImage}
            />
          </div>
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
