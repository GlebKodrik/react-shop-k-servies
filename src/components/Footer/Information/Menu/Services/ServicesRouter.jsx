import { Route, Switch } from "react-router-dom";
import { NotFound } from "../../../../NotFould/NotFound";
import { Requisites } from "./Requisites/Requisites";
import { About } from "./About/About";
import { Contact } from "./Contact/Contact";
import { Location } from "./Location/Location";

export const ServicesRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/services/about" render={() => <About />} />
        <Route path="/services/requisites" render={() => <Requisites />} />
        <Route path="/services/contacts" render={() => <Contact />} />
        <Route path="/services/location" render={() => <Location />} />
        <Route
          path="/services/guarantee"
          render={() => <div>В работе...</div>}
        />
        <Route path="*" render={() => <NotFound />} />
      </Switch>
    </>
  );
};
