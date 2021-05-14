import InputMask from "react-input-mask";
import { useController } from "react-hook-form";
import React from "react";
import { TextField } from "@material-ui/core";

export const MaskPhone = ({ control, name, errors, ...props }) => {
  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
    defaultValue: "",
  });

  return (
    <InputMask mask="+7 (999) 999 99 99" maskChar=" " {...inputProps} ref={ref}>
      {() => (
        <TextField
          error={!!errors.phone}
          helperText={errors.phone && errors.phone.message}
          {...props}
        />
      )}
    </InputMask>
  );
};
