import { TextField } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { IMaskMixin } from "react-imask";

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

export const InputField = ({ style, ...props }) => {
  return (
    <ThemeProvider theme={theme}>
      <TextField {...props} />
    </ThemeProvider>
  );
};

export const IMaskPhoneInput = IMaskMixin((props) => <InputField {...props} />);
