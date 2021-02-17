import React, { Component } from 'react'
import VerticalTab from './VerticalTab';
import { RegisterDiv, HeaderTabDiv, InfoTabDiv, VerticalTabDiv } from './RegisterStyledComponents';

export class Register extends Component {
    
    state = { 
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

    accountForSubmittedForm = input => {
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
                <HeaderTabDiv>
                    <h1> Registration </h1>
                </HeaderTabDiv>
                <InfoTabDiv>

                </InfoTabDiv>
                <VerticalTabDiv>
                    <VerticalTab onTabChange={this.accountForTabChange} onFormSubmit={this.accountForSubmittedForm}/>
                </VerticalTabDiv>
                {this.state.activeIndex}
            </RegisterDiv>


        )
    }
}

export default Register
