import { Route, Switch } from "react-router-dom";
import { NotFound } from "../../NotFould/NotFound";
import { Subcategory } from "./Subcategory/Subcategory";

export const CategoryRouter = () => {
  return (
    <>
      <Switch>
        <Route
          path="/category/konveyyernaya-lenta"
          render={() => <Subcategory />}
        />
        <Route path="*" render={() => <NotFound />} />
      </Switch>
    </>
  );
};
