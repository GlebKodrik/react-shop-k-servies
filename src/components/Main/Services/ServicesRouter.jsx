import { Route, Switch } from "react-router-dom";
import { NotFound } from "../../NotFould/NotFound";
import { Requisites } from "./Requisites/Requisites";

export const ServicesRouter = () => {
  return (
    <div>
      <Switch>
        <Route path="/services/about" render={() => <div>Глебка</div>} />
        <Route path="/services/requisites" render={() => <Requisites />} />
        <Route path="/services/guarantee" render={() => <div>Сучка</div>} />
        <Route path="*" render={() => <NotFound />} />
      </Switch>
    </div>
  );
};
