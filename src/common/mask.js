import InputMask from "react-input-mask";
import { InputField } from "./model";
import { useController } from "react-hook-form";
import React from "react";

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
        <InputField
          error={!!errors.phone}
          helperText={errors.phone && errors.phone.message}
          {...props}
        />
      )}
    </InputMask>
  );
};
