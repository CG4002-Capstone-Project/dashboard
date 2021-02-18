import React, { Component } from 'react';
import { Button, Pane, Tablist, SidebarTab, TextInput } from 'evergreen-ui';
import InputForm from './InputForm';
// import './VerticalTab.css';


export class VerticalTab extends Component {

    state = {
        activeIndex: '0',
        tabs: ['Coach', 'Trainee 1', 'Trainee 2', 'Trainee 3'],
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
                    <InputForm />
                </Pane>
                ))}
            </Pane>
         </Pane>
        )
    }
}

export default VerticalTab
