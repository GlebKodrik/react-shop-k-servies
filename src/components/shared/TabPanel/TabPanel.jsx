import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import * as yup from "yup";
import {
  emailValidation,
  passwordValidation,
} from "../../../common/validations";

const SignupSchema = yup.object().shape({
  ...passwordValidation,
  ...emailValidation,
});

export const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
};
