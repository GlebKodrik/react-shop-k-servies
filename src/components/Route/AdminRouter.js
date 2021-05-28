import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";

export const AdminRouter = ({ component: Component, ...props }) => {
  const status = useSelector((state) => state.user.client.status);
  return (
    <Route
      {...props}
      component={(props) => {
        return status === "admin" ? (
          <Component {...props} />
        ) : (
          <>
            <Redirect to={"/login"} />
          </>
        );
      }}
    />
  );
};
