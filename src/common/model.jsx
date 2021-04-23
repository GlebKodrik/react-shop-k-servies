import { TextField } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

export const InputField = ({ theme, ...props }) => {
  return (
    <ThemeProvider theme={theme}>
      <TextField {...props} />
    </ThemeProvider>
  );
};
