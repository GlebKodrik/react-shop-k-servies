import { TextField } from "@material-ui/core";
import React from "react";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .Mui-error": {
//       color: "black",
//     },
//     "& .MuiFormHelperText-root": {
//       color: "black",
//     },
//   },
// }));

export const InputField = React.forwardRef(({ ...props }, ref) => {
  // const classes = useStyles();
  return <TextField {...props} fullWidth inputRef={ref} />;
});
