import React, { Component } from 'react'
import VerticalTab from './VerticalTab';
import { RegisterDiv, HeaderTabDiv, HeaderH1, InfoP, VerticalTabDiv } from './RegisterStyledComponents';
import LoginAndRegisterNavBar from '../navbars/LoginAndRegisterNavBar';

export class NewRegister extends Component {
    
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
                    <LoginAndRegisterNavBar />
                    <HeaderTabDiv>
                        <HeaderH1> Registration </HeaderH1>
                        <InfoP> 
                        Please be informed that only coaches can register themselves and their trainees into the system. 
                                <br></br>
                                <br></br>
                        Trainees who wish to use DanceEdge must contact their coach to register the group on their behalf.
                        </InfoP>
                    </HeaderTabDiv>
                    <VerticalTabDiv>
                        <VerticalTab onTabChange={this.accountForTabChange} onFormSubmit={this.accountForSubmittedForm}/>
                    </VerticalTabDiv>
                    {this.state.activeIndex}
            </RegisterDiv>
        )
    }
}

export default NewRegister
