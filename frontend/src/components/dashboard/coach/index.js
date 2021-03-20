import React, { Component } from 'react';
import PreDataDashboard from './pre-data';
import PostDataDashboard from './post-data';
import DataDashboard from './data';

export class Dashboard extends Component {

    state = {
        /**
         * 0 - pre data
         * 1 - data
         * 2 - post data
         */
        currentState: 0
    }

    onDanceStart = async (event) => {
        await this.setState({
            currentState: 1,
        })
    }

    onDanceEnd = async (event) => {
        await this.setState({
            currentState: 2,
        })
    }
    render() {
        let display;
        if (this.state.currentState == 0) {
            display = <PreDataDashboard onStart={this.onDanceStart}/>;
        } else if (this.state.currentState == 1) {
            display = <DataDashboard />;
        } else if (this.state.currentState == 2) {
            display = <PostDataDashboard />;
        }
        return (
            <React.Fragment>
                {display}
            </React.Fragment>
        )
    }
}

export default Dashboard
