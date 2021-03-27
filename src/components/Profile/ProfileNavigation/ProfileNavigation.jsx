import React from 'react';
import {NavLink} from "react-router-dom";
import s from './../Profile.module.css';
import cn from "classnames";

export const ProfileNavigation = (props) => {
    const array = [
        {name: "Профиль", path: "details", icon: "account_circle"},
        {name: "Корзина", path: "basket", icon: "shopping_cart"},
        {name: "Финансы", path: "purchases", icon: "account_balance_wallet"},
        {name: "Обратная связь", path: "communications", icon: "email"}
    ]
    return <div className={s.lavelMain}>
        <div className="container">
            <div className={s.headerSectionItem}>
                {array.map(a => {
                    return <div key={a.name} className={s.headerItem}>
                        <NavLink to={"/profile/" + a.path}>
                            <div className={s.ItemInline}>
                                <div className={cn("material-icons red-text" , s.ItemIcon)}>
                                    {a.icon}
                                </div>
                                <div className={s.ItemName}>
                                    {a.name}
                                </div>
                            </div>
                        </NavLink>
                    </div>
                })}
            </div>
        </div>
    </div>
}