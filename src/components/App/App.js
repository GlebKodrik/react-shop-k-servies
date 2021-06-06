import "./App.css";
import { Route, Switch } from "react-router-dom";
import { AuthContainer } from "../Authorization/AuthContainer";
import { Footer } from "../Footer/Footer";
import { MainRouter } from "../Main/MainRouter";
import { ScrollToTop } from "../shared/ScrollToTop";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "swiper/swiper-bundle.min.css";
import { Basket } from "../Header/Menu/Basket/Basket";
import { Header } from "../Header/Header";
import { initializeApp } from "../../redux/appReducer";
import Loader from "../shared/Loader/Loader";
import { PopupToast } from "../Popup/PopupToast/PopupToast";
import { NotFound } from "../shared/NotFould/NotFound";

const theme = createMuiTheme({
  props: {
    MuiTextField: {
      fullWidth: true,
    },
  },
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

const App = () => {
  const dispatch = useDispatch();
  const initialized = useSelector((state) => state.app.initialized);

  useEffect(() => {
    dispatch(initializeApp());
  }, [dispatch]);

  if (!initialized) {
    return <Loader page />;
  }

  return (
    <Route>
      <ThemeProvider theme={theme}>
        <ScrollToTop />
        <div className="app">
          <Header />
          <div className="app-content">
            <Switch>
              <Route path="/basket" render={() => <Basket />} />
              <Route path="/login" render={() => <AuthContainer login />} />
              <Route path="/register" render={() => <AuthContainer />} />
              <Route path="/" render={() => <MainRouter />} />
              <Route path="*" render={() => <NotFound />} />
            </Switch>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
      <PopupToast />
    </Route>
  );
};

export default App;
