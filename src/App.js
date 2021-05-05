import "./App.css";
import { Route, Switch } from "react-router-dom";
import { HeaderContainer } from "./components/Header/HeaderContainer";
import { AuthContainer } from "./components/Authorization/AuthContainer";
import { Footer } from "./components/Footer/Footer";
import { NotFound } from "./components/NotFould/NotFound";
import { MainRouter } from "./components/Main/MainRouter";
import { ScrollToTop } from "./common/ScrollToTop";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

import React from "react";

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
  return (
    <Route>
      <ThemeProvider theme={theme}>
        <ScrollToTop />
        <div className="app">
          <HeaderContainer />
          <div className="app-content">
            <Switch>
              <Route path="/login" render={() => <AuthContainer login />} />
              <Route path="/register" render={() => <AuthContainer />} />
              <Route path="/" render={() => <MainRouter />} />
              <Route path="*" render={() => <NotFound />} />
            </Switch>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </Route>
  );
};

export default App;
