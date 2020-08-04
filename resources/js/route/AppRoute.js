import React, { Fragment } from 'react';
import { Route, Switch } from "react-router";
import HomePage from '../pages/HomePage';
import CoursePlan from '../pages/CoursePlan';
import Registration from '../pages/Registration';
import Freeclass from '../pages/Freeclass';

const AppRoute = () => {
    return (
        <div>
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/courseplan" component={CoursePlan} />
                    <Route exact path="/registration" component={Registration} />
                    <Route exact path="/freeclass" component={Freeclass} />
                </Switch>
            </Fragment>
        </div>
    );
};

export default AppRoute;
