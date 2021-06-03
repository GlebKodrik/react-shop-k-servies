import { Redirect, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { setAppMessage } from "../../redux/appReducer";

export const AdminRouter = ({ component: Component, ...props }) => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.user.client.status);
  const basket = useSelector((state) => state.basket.basket);
  const favorite = useSelector((state) => state.favorite.favorites);

  status !== "admin" &&
    dispatch(setAppMessage("Вы не администратор!", "error"));

  return (
    <Route
      {...props}
      component={(props) => {
        return status === "admin" ? (
          <Component {...props} basket={basket} favorite={favorite} />
        ) : (
          <Redirect to={"/login"} />
        );
      }}
    />
  );
};
