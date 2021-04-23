import "./App.css";
import { Route, Switch } from "react-router-dom";
import { HeaderContainer } from "./components/Header/HeaderContainer";
import { LoginContainer } from "./components/Authorization/Login/LoginContainer";
import { RegisterContainer } from "./components/Authorization/Registration/RegistrationContainer";
import { PrivateRouter } from "./components/Route/PrivateRouter";
import { ProfileRoute } from "./components/Profile/ProfileRoute";
import { Footer } from "./components/Footer/Footer";
import { NotFound } from "./components/NotFould/NotFound";
import { Main } from "./components/Main/Main";
//PrivateRouter компонента
const App = (props) => {
  return (
    <div className="app">
      <HeaderContainer />
      <div className="app-content">
        <Switch>
          <Route exact path="/" render={() => <Main />} />
          <Route path="/login" render={() => <LoginContainer />} />
          <Route path="/register" render={() => <RegisterContainer />} />
          <PrivateRouter path="/profile" component={ProfileRoute} />
          <Route path="*" render={() => <NotFound />} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
