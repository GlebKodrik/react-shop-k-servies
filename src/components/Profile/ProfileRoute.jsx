import React from "react";
import { Profile } from "./Profile/Profile";
import { Redirect, Route, Switch } from "react-router-dom";
import { Navigation } from "./ProfileNavigation/Navigation";
import { NotFound } from "../NotFould/NotFound";
import { AppealRoute } from "./Appeal/AppealRoute";
export const ProfileRoute = () => {
  return (
    <div>
      <div>
        <Navigation />
        <Switch>
          <Redirect exact from="/" to="/" />
          <Route path="/profile/details" render={() => <Profile />} />
          <Route
            path="/profile/communications"
            render={() => <AppealRoute />}
          />
          <Route path="/profile/*" render={() => <NotFound />} />
        </Switch>
      </div>
    </div>
  );
};
