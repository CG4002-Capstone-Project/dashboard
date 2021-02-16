import React, { Component } from 'react';
import { Tab, Tabs } from '@blueprintjs/core';


export class VerticalTab extends Component {

    onVerticalTabChange = event => {
        this.props.onTabChange(event);
    }

    render() {
        return (
            <React.Fragment>
                <Tabs id='VT' vertical='true' onChange={this.onVerticalTabChange}>
                    <Tab id='coach' title='Coach'/>
                    <Tab id='trainee1' title='Trainee 1'/>
                    <Tab id='trainee2' title='Trainee 2'/>
                    <Tab id='trainee3' title='Trainee 3'/>
                </Tabs>
            </React.Fragment>
        )
    }
}

export default VerticalTab
