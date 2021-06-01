import React, { useEffect, useState } from "react";
import { Profile } from "./Profile/Profile";
import { Redirect, Route, Switch } from "react-router-dom";
import { Navigation } from "./Navigation/Navigation";
import { NotFound } from "../page/NotFould/NotFound";
import { AppealRoute } from "./Appeal/AppealRoute";
import { Favorites } from "./Favorites/Favorites";
import { AdminRouter } from "../Route/AdminRouter";
import { Admin } from "./Admin/Admin";
import { useSelector } from "react-redux";

export const ProfileRoute = () => {
  const basket = useSelector((state) => state.basket.basket);
  const favorite = useSelector((state) => state.favorite.favorites);
  const user = useSelector((state) => state.user.client);
  const isFetching = useSelector((state) => state.user.isFetching);
  const edit = useSelector((state) => state.user.edit);

  const [state, setState] = useState({
    nickname: user?.profile?.nickname,
    phone: user?.profile?.phone,
    email: user?.email,
  });

  useEffect(() => {
    setState({
      nickname: user?.profile?.nickname,
      phone: user?.profile?.phone,
      email: user?.email,
    });
  }, [user]);

  return (
    <>
      <Navigation />
      <Switch>
        <Redirect exact from="/" to="/" />
        <Route
          path="/profile/details"
          render={() => <Profile {...{ user, isFetching, edit, state }} />}
        />
        <AdminRouter path="/profile/admin" component={Admin} basket={basket} />
        <Route path="/profile/communications" render={() => <AppealRoute />} />
        <Route
          path="/profile/favorites"
          render={() => <Favorites {...{ favorite, basket }} />}
        />
        <Route path="/profile/*" render={() => <NotFound />} />
      </Switch>
    </>
  );
};
