import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;

export const PopupToast = (props) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    props.setState({ ...props, open: false });
  };

  return (
    <div>
      <Snackbar
        open={props.open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert onClose={handleClose} severity={props.type}>
          {props.text}
        </Alert>
      </Snackbar>
    </div>
  );
};
