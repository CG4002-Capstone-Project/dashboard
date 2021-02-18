import React, { Component } from 'react';
import { Button, Pane, Tablist, SidebarTab, TextInput } from 'evergreen-ui';
import InputForm from './InputForm';
import ViewAndSubmit from './ViewAndSubmit';
// import './VerticalTab.css';


export class VerticalTab extends Component {

    state = {
        activeIndex: '0',
        tabs: ['Coach', 'Trainee 1', 'Trainee 2', 'Trainee 3', 'View & Submit'],
        coach: {
            name: '',
            email: '',
            username: '',
            password: '',
            onSave: false,
        },
        trainee1: {
            name: '',
            email: '',
            username: '',
            password: '',
            onSave: false,
        },
        trainee2: {
            name: '',
            email: '',
            username: '',
            password: '',
            onSave: false,
        },
        trainee3: {
            name: '',
            email: '',
            username: '',
            password: '',
            onSave: false,
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

        if (Object.keys(event).length === 1) {
            this.setState({
                onSave: event.onSave
            })
        } else {
            this.setState({
                coach: {
                    name: event.name,
                    email: event.email,
                    username: event.username,
                    password: event.password,
                    onSave: event.onSave,
                }
            })
        }
        console.log(JSON.stringify(this.state));
    }

    onTraineeOneInputFormChange = event => {
        console.log('t1' + JSON.stringify(event));
        if (Object.keys(event).length === 1) {
            this.setState({
                onSave: event.onSave
            })
        } else {
            this.setState({
                coach: {
                    name: event.name,
                    email: event.email,
                    username: event.username,
                    password: event.password,
                    onSave: event.onSave,
                }
            })
        }
        console.log(JSON.stringify(this.state));
    }

    onTraineeTwoInputFormChange = event => {
        console.log('t2' + JSON.stringify(event));
        if (Object.keys(event).length === 1) {
            this.setState({
                onSave: event.onSave
            })
        } else {
            this.setState({
                coach: {
                    name: event.name,
                    email: event.email,
                    username: event.username,
                    password: event.password,
                    onSave: event.onSave,
                }
            })
        }
        console.log(JSON.stringify(this.state));

    }

    onTraineeThreeInputFormChange = event => {
        console.log('t3' + JSON.stringify(event));
        if (Object.keys(event).length === 1) {
            this.setState({
                onSave: event.onSave
            })
        } else {
            this.setState({
                coach: {
                    name: event.name,
                    email: event.email,
                    username: event.username,
                    password: event.password,
                    onSave: event.onSave,
                }
            })
        }
        console.log(JSON.stringify(this.state));

    }

    onSaveController = event => {
        if (event.index === 0) {
            this.onCoachInputFormChange(event)
        } else if (event.index === 1) {
            this.onTraineeOneInputFormChange(event)
        } else if (event.index === 2) {
            this.onTraineeTwoInputFormChange(event)
        } else if (event.index === 3) {
            this.onTraineeThreeInputFormChange(event)
        }
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
         <Pane display='flex' height={240} >
             <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
                 {this.state.tabs.map((tab, index) => (
                     <SidebarTab 
                        key={tab}
                        id={tab}
                        onSelect={() => this.setState({ activeIndex: index })}
                        isSelected={index === this.state.activeIndex}
                        aria-controls={`panel-${tab}`}
                    >
                        {tab}
                    </SidebarTab>
                 ))}
                 
             </Tablist>
             <Pane padding={16} background="tint1" flex="1">
                {this.state.tabs.map((tab, index) => (
                    <Pane
                        key={tab}
                        id={`panel-${tab}`}
                        role="tabpanel"
                        aria-labelledby={tab}
                        aria-hidden={index !== this.state.activeIndex}
                        display={index === this.state.activeIndex ? 'block' : 'none'}
                    >
                    {index === 4 ? <ViewAndSubmit coach={this.state.coach} trainee1={this.state.trainee1} trainee2={this.state.trainee2} trainee3={this.state.trainee3} />
                     : <InputForm index={index} onInputFormChange={this.onSaveController} />}
                </Pane>
                ))}
            </Pane>
         </Pane>
        )
    }
}

export default VerticalTab
