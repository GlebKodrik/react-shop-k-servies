import React from 'react';
import {useSelector} from "react-redux";
import {Redirect, Route} from "react-router-dom";
import {getIsAuth} from "../../Redux/auth-selector";

export const PrivateRouter = ({component: Component, ...props}) => {
    const isAuth = useSelector(getIsAuth);
    return <Route {...props} component={(props) => {
        return isAuth ? <Component {...props}/> : <Redirect to={"/login"}/>
    }}/>
}