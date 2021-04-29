import { TextField, withStyles } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";

const theme = withStyles({
  root: {
    background: "red",
  },
});

export const InputField = React.forwardRef(({ ...props }, ref) => {
  return <TextField {...props} fullWidth inputRef={ref} />;
});
