import React from "react";
import { Profile } from "./Profile/Profile";
import { Redirect, Route, Switch } from "react-router-dom";
import { Navigation } from "./Navigation/Navigation";
import { NotFound } from "../shared/NotFould/NotFound";
import { AppealRoute } from "./Appeal/AppealRoute";
import { Basket } from "./Basket/Basket";
import { Favorites } from "./Favorites/Favorites";
export const ProfileRoute = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Redirect exact from="/" to="/" />
        <Route path="/profile/details" render={() => <Profile />} />
        <Route path="/profile/communications" render={() => <AppealRoute />} />
        <Route path="/profile/basket" render={() => <Basket />} />
        <Route path="/profile/favorites" render={() => <Favorites />} />
        <Route path="/profile/*" render={() => <NotFound />} />
      </Switch>
    </>
  );
};
