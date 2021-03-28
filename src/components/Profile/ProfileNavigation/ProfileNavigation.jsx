import React from 'react';
import {NavLink} from "react-router-dom";
import s from './../Profile.module.css';
import cn from "classnames";
import {array} from "../../../common/paths";

export const ProfileNavigation = (props) => {

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