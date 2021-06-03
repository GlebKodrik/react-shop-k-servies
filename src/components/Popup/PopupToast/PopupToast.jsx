import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearProcessing } from "../../../redux/appReducer";

const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;

export const PopupToast = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.app.message);

  const [state, setState] = useState({
    open: false,
    text: "",
    type: "",
  });

  useEffect(() => {
    if (message) {
      setState({
        open: true,
        text: message.text,
        type: message.type || "success",
      });
    }
    dispatch(clearProcessing());
  }, [dispatch, message]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setState({ ...state, open: false });
  };

  return (
    <div>
      <Snackbar
        open={state.open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert onClose={handleClose} severity={state.type}>
          {state.text}
        </Alert>
      </Snackbar>
    </div>
  );
};
