import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import { Appeal } from "./Appeal";
import { Archive } from "./Archive/Archive";
import { NotFound } from "../../page/NotFould/NotFound";
import React from "react";
import s from "./Appeal.module.css";
import cn from "classnames";

export const AppealRoute = () => {
  const match = useRouteMatch();

  return (
    <div className="container">
      <div className={s.tabs}>
        <NavLink
          exact
          className={cn(s.tabsItem)}
          activeClassName={s.active}
          to={`${match.url}`}
        >
          Обращения
        </NavLink>

        <NavLink
          exact
          className={cn(s.tabsItem)}
          activeClassName={s.active}
          to={`${match.url}/archive`}
        >
          Архив обращений
        </NavLink>
      </div>
      <Switch>
        <Route exact path={match.path} render={() => <Appeal />} />
        <Route path={`${match.path}/archive`} render={() => <Archive />} />
        <Route path="/*" render={() => <NotFound />} />
      </Switch>
    </div>
  );
};
