import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import CoachApp from '../components/coach/CoachApp';

import { COACH_DASHBOARD } from '../constants/Routes';

const AuthenticatedApp = () => {
    return (
        <Switch>
            <Route exact path={COACH_DASHBOARD} component={CoachApp} />
            <Redirect to={COACH_DASHBOARD} />
        </Switch>
    )
}

export default AuthenticatedApp;
