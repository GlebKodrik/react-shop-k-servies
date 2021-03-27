import React from 'react';
import {Header} from "./Header";
import {useSelector} from "react-redux";
import {getIsAuth} from "../../Redux/auth-selector";
import {getLogo} from "../../Redux/header-selector";

export const HeaderContainer = () => {
    const logo = useSelector(getLogo);
    const isAuth = useSelector(getIsAuth);
    return <Header {...{
        logo,
        isAuth,
    }}/>
}