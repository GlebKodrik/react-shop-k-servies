import { Route, Switch } from "react-router-dom";
import { NotFound } from "../../NotFould/NotFound";

export const ServicesRouter = () => {
  return (
    <div>
      <Switch>
        <Route path="/services/about" render={() => <div>Глебка рулит</div>} />
        <Route path="/services/guarantee" render={() => <div>Сучка</div>} />
        <Route path="*" render={() => <NotFound />} />
      </Switch>
    </div>
  );
};
