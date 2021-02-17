import React, { Component } from 'react';
import { Button, Tab, Tabs } from '@blueprintjs/core';
import InputForm from './InputForm';
import './VerticalTab.css';


export class VerticalTab extends Component {

    state = {
        activeIndex: '0',
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
        console.log('event' + event + typeof event);
        this.setState({
            activeIndex: event,
        })

        console.log(this.state.activeIndex + ' ' + typeof this.state.activeIndex);
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
    onNextButtonClicked = event => {
        // event.preventDefault();
        const newNumber = parseInt(this.state.activeIndex, 10) + 1;
        const newNumberString = newNumber.toString();
        this.setState({
            activeIndex: newNumberString,
        })
        console.log(this.state.activeIndex);
    }

    render() {
        return (
            <React.Fragment>
                <Tabs id='VT' vertical={true} className='tabs' onChange={this.onVerticalTabChange} renderActiveTabPanelOnly={true} selectedTabId={this.state.activeIndex} large={true}>
                    <Tab id='0' title='Coach' className='tab' panelClassName='input'  panel={<InputForm activeIndex='coach' onSave={this.onCoachInputFormChange} onNext={this.onNextButtonClicked}/>} />
                    <Tab id='1' title='Trainee 1' className='tab' panelClassName='input' panel={<InputForm activeIndex='trainee1' onSave={this.onTraineeOneInputFormChange} onNext={this.onNextButtonClicked}/>}/>
                    <Tab id='2' title='Trainee 2' className='tab' panelClassName='input' panel={<InputForm activeIndex='trainee2' onSave={this.onTraineeTwoInputFormChange} onNext={this.onNextButtonClicked}/>}/>
                    <Tab id='3' title='Trainee 3' className='tab' panelClassName='input' panel={<InputForm activeIndex='trainee3' onSave={this.onTraineeThreeInputFormChange} onNext={this.onNextButtonClicked}/>}/>
                    <Tab id='4' title='Submit' className='tab' panelClassName='input' panel={<Button text='Submit' onClick={this.onSubmitButtonClicked}/>}/>
                </Tabs>
            </React.Fragment>
        )
    }
}

export default VerticalTab
