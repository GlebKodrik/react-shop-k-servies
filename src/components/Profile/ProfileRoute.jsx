import React from "react";
import { Profile } from "./Profile/Profile";
import { Redirect, Route, Switch } from "react-router-dom";
import { Navigation } from "./Navigation/Navigation";
import { NotFound } from "../page/NotFould/NotFound";
import { AppealRoute } from "./Appeal/AppealRoute";
import { Favorites } from "./Favorites/Favorites";
import { AdminRouter } from "../Route/AdminRouter";
import { Admin } from "./Admin/Admin";
export const ProfileRoute = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Redirect exact from="/" to="/" />
        <Route path="/profile/details" render={() => <Profile />} />
        <AdminRouter path="/profile/admin" component={Admin} />
        <Route path="/profile/communications" render={() => <AppealRoute />} />
        <Route path="/profile/favorites" render={() => <Favorites />} />
        <Route path="/profile/*" render={() => <NotFound />} />
      </Switch>
    </>
  );
};
