import React, { useState } from "react";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useController } from "react-hook-form";

export const UseFormControl = ({ control, name, errors }) => {
  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
    defaultValue: "",
  });

  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <FormControl variant="outlined" error={!!errors.password}>
      <InputLabel required>Пароль</InputLabel>
      <OutlinedInput
        autoComplete="on"
        {...inputProps}
        inputRef={ref}
        type={values.showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        labelWidth={70}
      />
      {errors.password && (
        <FormHelperText>{errors.password.message}</FormHelperText>
      )}
    </FormControl>
  );
};
