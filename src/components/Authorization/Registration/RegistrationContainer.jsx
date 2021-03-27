import React from 'react';
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {getIsAuth} from "../../../Redux/auth-selector";
import {Registration} from "./Registration";

export const RegisterContainer = () => {
    const isAuth = useSelector(getIsAuth);

    if (isAuth) return <Redirect to="/"/>

    return <Registration />;
}