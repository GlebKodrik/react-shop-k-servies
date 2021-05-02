import { Route, Switch } from "react-router-dom";
import { NotFound } from "../../NotFould/NotFound";
import { Requisites } from "./Requisites/Requisites";
import { About } from "./About/About";

export const ServicesRouter = () => {
  return (
    <div>
      <Switch>
        <Route path="/services/about" render={() => <About />} />
        <Route path="/services/requisites" render={() => <Requisites />} />
        <Route
          path="/services/guarantee"
          render={() => <div>В работе...</div>}
        />
        <Route path="*" render={() => <NotFound />} />
      </Switch>
    </div>
  );
};
