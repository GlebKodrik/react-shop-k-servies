import React from "react";
import { TextField } from "@material-ui/core";
import { useController } from "react-hook-form";

export const Input = ({ control, name, ...props }) => {
  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
    defaultValue: "",
  });

  return <TextField {...inputProps} inputRef={ref} {...props} />;
};
