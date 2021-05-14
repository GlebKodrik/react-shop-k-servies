import React from "react";
import { Login } from "./Login/Login";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Registration } from "./Registration/Registration";

export const AuthContainer = ({ login }) => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (isAuth) return <Redirect to="/" />;

  return login ? <Login /> : <Registration />;
};
