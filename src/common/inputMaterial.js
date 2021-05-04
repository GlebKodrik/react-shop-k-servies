import { TextField, ThemeProvider, createMuiTheme } from "@material-ui/core";
import React from "react";

const style = createMuiTheme({
  palette: {
    primary: {
      light: "#34a6e0",
      main: "#0290D9",
      dark: "#016497",
    },
    secondary: {
      light: "#c3c3c3",
      main: "#b5b5b5",
      dark: "#7e7e7e",
    },
  },
});

export const InputField = React.forwardRef(({ ...props }, ref) => {
  return (
    <ThemeProvider theme={style}>
      <TextField {...props} fullWidth inputRef={ref} />
    </ThemeProvider>
  );
});
