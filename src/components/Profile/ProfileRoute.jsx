import React from 'react';
import {Profile} from "./Profile/Profile";
import {Redirect, Route, Switch} from "react-router-dom";
import {ProfileNavigation} from "./ProfileNavigation/ProfileNavigation";
import {NotFound} from "../NotFould/NotFound";

export const ProfileRoute = () => {
    return (
        <div>
            <div>
                <ProfileNavigation/>
                <Switch>
                    <Redirect exact from="/" to="/" />
                    <Route path="/profile/details" render={() => <Profile/>}/>
                    <Route path='/profile/*' render={() => <NotFound />}/>
                </Switch>
            </div>
        </div>
    )
}