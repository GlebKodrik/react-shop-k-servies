import { TextField } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { IMaskMixin } from "react-imask";
import React from "react";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3F51B5",
    },
    secondary: {
      main: "#B3B3B7",
    },
  },
});

export const InputField = React.forwardRef((props, ref) => {
  return (
    <ThemeProvider theme={theme}>
      <TextField {...props} ref={ref} />
    </ThemeProvider>
  );
});

export const IMaskPhoneInput = IMaskMixin(({ ...props }) => {
  return <InputField {...props} />;
});
