import { Grid } from "@material-ui/core"
import { useForm } from "react-hook-form"
import { Input } from "../../shared/Input/Input"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import {
  emailValidation,
  passwordValidation,
} from "../../../common/validations"
const SignupSchema = yup.object().shape({
  ...passwordValidation,
  ...emailValidation,
})

export const AddCategories = () => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: { name: "" },
    resolver: yupResolver(SignupSchema),
    mode: "onTouched",
  })

  const onSubmit = (values) => {
    console.log(values)
    reset()
  }

  return (
    <>
      <Grid
        container
        direction="row-reverse"
        justify="flex-start"
        alignItems="flex-start"
      >
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" noValidate>
          <Input
            label={"Имя категории"}
            control={control}
            error={!!errors.name}
            helperText={errors.name && errors.name.message}
            name={"nickname"}
          />
          <Input
            label={"Имя url пути"}
            control={control}
            error={!!errors.url}
            helperText={errors.url && errors.url.message}
            name={"url"}
          />
        </form>
      </Grid>
    </>
  )
}
