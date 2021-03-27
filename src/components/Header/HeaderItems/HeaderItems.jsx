import React, {useState} from 'react';
import s from './../Header.module.css'
import {NavLink, useHistory} from "react-router-dom";
import cn from "classnames";
import {useDispatch} from "react-redux";
import {logOut} from "../../../Redux/authReducer";

export const HeaderItems = (props) => {
    const [focus, setFocus] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const redirectOut = () => {
        history.push('/');
        dispatch(logOut());
    }
    return (
        <div>
            <div className={s.headerMenu}>
                <div className={s.headerItem}>
                    <NavLink to='/'>
                        <div className="material-icons" style={{fontSize: 40}}>location_on</div>
                        <div>Мы находимся</div>
                    </NavLink>
                </div>

                {props.isAuth && <div className={s.headerItem}>
                    <NavLink to='/profile/basket'>
                        <div className="material-icons" style={{fontSize: 40}}>shopping_basket</div>
                        <div>Корзина</div>
                    </NavLink>
                </div>}

                <div className={s.headerItem} onMouseEnter={() => setFocus(true)}
                     onMouseLeave={() => setFocus(false)}>
                    <NavLink to={!props.isAuth ? "/login" : "/profile"}>
                        <div className="material-icons" style={{fontSize: 40}}>account_circle</div>
                        <div>{!props.isAuth ? "Войти" : "Профиль"}</div>
                    </NavLink>
                    {props.isAuth && <div className={cn(s.headerProfileFocus, {
                        [s.MenuRight]: focus,
                    })}>
                        {focus && <div className={s.menuWrapper}>
                            <ul className={s.menuLeft}>
                                <li className={s.menuLeftTitle}>
                                    <ul>
                                        <li><NavLink to={"/profile"}>Профиль</NavLink></li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li onClick={redirectOut}>Выйти</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>}
                    </div>}
                </div>
            </div>
        </div>
    )
}