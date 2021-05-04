import "./App.css";
import { Route, Switch } from "react-router-dom";
import { HeaderContainer } from "./components/Header/HeaderContainer";
import { AuthContainer } from "./components/Authorization/AuthContainer";
import { Footer } from "./components/Footer/Footer";
import { NotFound } from "./components/NotFould/NotFound";
import { MainRouter } from "./components/Main/MainRouter";

const App = () => {
  return (
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
  );
};

export default App;
