import React, { Component } from 'react'
import VerticalTab from './VerticalTab';
import { RegisterDiv, VerticalTabDiv } from './RegisterStyledComponents';

export class Register extends Component {
    
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

    currentTab = (currentIndex) => {
        this.setState({
            activeIndex: currentIndex,
        })
    }

    submittedForm = input => {
        this.setState({
            coach: input.coach,
            trainee1: input.trainee1,
            trainee2: input.trainee2,
            trainee3: input.trainee3,
        })

        console.log('finished' + JSON.stringify(this.state));
    }
    render() {
        return (
            <RegisterDiv>
                <VerticalTabDiv>
                    <VerticalTab onTabChange={this.currentTab} onFormSubmit={this.submittedForm}/>
                </VerticalTabDiv>
                {this.state.activeIndex}
            </RegisterDiv>


        )
    }
}

export default Register
