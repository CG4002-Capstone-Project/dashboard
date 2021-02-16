import React, { Component } from 'react';
import { Tab, Tabs } from '@blueprintjs/core';
import InputForm from './InputForm';


export class VerticalTab extends Component {

    onVerticalTabChange = event => {
        this.props.onTabChange(event);
    }

    render() {
        return (
            <React.Fragment>
                <Tabs id='VT' vertical='true' onChange={this.onVerticalTabChange} renderActiveTabPanelOnly='true'>
                    <Tab id='coach' title='Coach' panel={<InputForm activeIndex='coach'/>} />
                    <Tab id='trainee1' title='Trainee 1' panel={<InputForm activeIndex='trainee1'/>}/>
                    <Tab id='trainee2' title='Trainee 2' panel={<InputForm activeIndex='trainee2'/>}/>
                    <Tab id='trainee3' title='Trainee 3' panel={<InputForm activeIndex='trainee3'/>}/>
                </Tabs>
            </React.Fragment>
        )
    }
}

export default VerticalTab
