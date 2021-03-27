import React from 'react';
import {Login} from "./Login";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {getIsAuth} from "../../../Redux/auth-selector";

export const LoginContainer = () => {
    const isAuth = useSelector(getIsAuth);

    if (isAuth) return <Redirect to="/"/>

    return <Login />;
}