import "./App.css";
import { Route, Switch } from "react-router-dom";
import { AuthContainer } from "../Authorization/AuthContainer";
import { Footer } from "../Footer/Footer";
import { NotFound } from "../shared/NotFould/NotFound";
import { MainRouter } from "../Main/MainRouter";
import { ScrollToTop } from "../shared/ScrollToTop";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import React, { useEffect } from "react";
import { getCategories } from "../../redux/productsReducer";
import { useDispatch, useSelector } from "react-redux";
import "swiper/swiper-bundle.min.css";
import { Basket } from "../Header/Menu/Basket/Basket";
import { Header } from "../Header/Header";
import { setInterceptor } from "../../api/api";
import { authThunk, meThunk } from "../../redux/authReducer";

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
  const categories = useSelector((state) => state.products.categories);

  useEffect(() => {
    setInterceptor((user) => dispatch(authThunk(user)));
    dispatch(meThunk());
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <Route>
      <ThemeProvider theme={theme}>
        <ScrollToTop />
        <div className="app">
          <Header />
          <div className="app-content">
            {categories.length ? (
              <Switch>
                <Route path="/basket" render={() => <Basket />} />
                <Route path="/login" render={() => <AuthContainer login />} />
                <Route path="/register" render={() => <AuthContainer />} />
                <Route path="/" render={() => <MainRouter />} />
                <Route path="*" render={() => <NotFound />} />
              </Switch>
            ) : (
              <>loading</>
            )}
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </Route>
  );
};

export default App;
