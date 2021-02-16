import React, { Component } from 'react';
import { Button, Tab, Tabs } from '@blueprintjs/core';
import InputForm from './InputForm';


export class VerticalTab extends Component {

    state = {
        activeIndex: 'coach',
        coach: {
            name: '',
            email: '',
            username: '',
            password: ''
        },
        trainee1: {
            name: '',
            email: '',
            username: '',
            password: ''
        },
        trainee2: {
            name: '',
            email: '',
            username: '',
            password: ''
        },
        trainee3: {
            name: '',
            email: '',
            username: '',
            password: ''
        }
    }

    onVerticalTabChange = event => {
        this.props.onTabChange(event);
        this.setState({
            activeIndex: event
        })
    }

    onCoachInputFormChange = event => {
        console.log('coach' + JSON.stringify(event));
        this.setState({
            coach: {
                name: event.name,
                email: event.email,
                username: event.username,
                password: event.password
            }
        })
    }

    onTraineeOneInputFormChange = event => {
        console.log('t1' + JSON.stringify(event));
        console.log(JSON.stringify(this.state));
        this.setState({
            trainee1: {
                name: event.name,
                email: event.email,
                username: event.username,
                password: event.password
            }
        })
    }

    onTraineeTwoInputFormChange = event => {
        console.log('t2' + JSON.stringify(event));
        this.setState({
            trainee2: {
                name: event.name,
                email: event.email,
                username: event.username,
                password: event.password
            }
        })
        console.log(JSON.stringify(this.state));

    }

    onTraineeThreeInputFormChange = event => {
        console.log('t3' + JSON.stringify(event));
        this.setState({
            trainee3: {
                name: event.name,
                email: event.email,
                username: event.username,
                password: event.password
            }
        })
        console.log(JSON.stringify(this.state));

    }

    onSubmitButtonClicked = event => {

        event.preventDefault();
        this.props.onFormSubmit(this.state)
    }

    render() {
        return (
            <React.Fragment>
                <Tabs id='VT' vertical='true' onChange={this.onVerticalTabChange} renderActiveTabPanelOnly='true'>
                    <Tab id='coach' title='Coach' panel={<InputForm activeIndex='coach' onSave={this.onCoachInputFormChange}/>} />
                    <Tab id='trainee1' title='Trainee 1' panel={<InputForm activeIndex='trainee1' onSave={this.onTraineeOneInputFormChange}/>}/>
                    <Tab id='trainee2' title='Trainee 2' panel={<InputForm activeIndex='trainee2' onSave={this.onTraineeTwoInputFormChange}/>}/>
                    <Tab id='trainee3' title='Trainee 3' panel={<InputForm activeIndex='trainee3' onSave={this.onTraineeThreeInputFormChange}/>}/>
                    <Tab id='submit' title='Submit' panel={<Button text='Submit' onClick={this.onSubmitButtonClicked}/>}/>
                </Tabs>
            </React.Fragment>
        )
    }
}

export default VerticalTab
