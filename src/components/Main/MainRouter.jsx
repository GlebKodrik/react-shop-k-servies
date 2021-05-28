import { Route, Switch } from "react-router-dom";
import { NotFound } from "../page/NotFould/NotFound";
import { Main } from "./Main";
import { ProfileRoute } from "../Profile/ProfileRoute";
import { PrivateRouter } from "../Route/PrivateRouter";
import s from "./Main.module.css";
import { ServicesRouter } from "../Footer/Information/Menu/Services/ServicesRouter";
import Subcategory from "./Categories/Subcategory/Subcategory";
import { Product } from "./Categories/Subcategory/Product/Product";

export const MainRouter = () => {
  return (
    <>
      <div className="container">
        <div className={s.wrapper}>
          <Switch>
            <PrivateRouter path="/profile" component={ProfileRoute} />
            <Route exact path="/" render={() => <Main />} />
            <Route path="/services" render={() => <ServicesRouter />} />
            <Route path="/category/:url" render={() => <Subcategory />} />
            <Route path="/product/:id" render={() => <Product />} />
            <Route path="*" render={() => <NotFound />} />
          </Switch>
        </div>
      </div>
    </>
  );
};
