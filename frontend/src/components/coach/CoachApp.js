import React, { Component } from 'react';
import DashboardNavBar from '../navbars/dashboard/DashboardNavBar';
import Dashboard from '../dashboard/coach/Dashboard';

export class CoachApp extends Component {
    render() {
        return (
            <React.Fragment>
                <DashboardNavBar user='coach' name='Adam' />
                <Dashboard>


                </Dashboard>
            </React.Fragment>

        )
    }
}

export default CoachApp
