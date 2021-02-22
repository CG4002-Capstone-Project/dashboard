import React, { Component } from 'react'
import VerticalTab from './VerticalTab';
import { RegisterDiv, HeaderTabDiv, HeaderH1, InfoP, VerticalTabDiv } from './RegisterStyledComponents';
import LoginAndRegisterNavBar from '../navbars/login-register/LoginAndRegisterNavBar';
import axios from 'axios';

export class NewRegister extends Component {
    
    state = { 
        coach: {
            role: 'coach',
        },
        trainee1: {
            role: 'trainee',
        },
        trainee2: {
            role: 'trainee',
        },
        trainee3: {
            role: 'trainee',
        },
    }

    registerGroup = async () => {
        const accessToken = await axios.post(' http://localhost:3333/register/create', { ...this.state })
        console.log('access token: ' + accessToken);
    }

    accountForSubmittedForm = async (input) => {
        console.log(JSON.stringify(input));

        await this.setState({
            coach: { ...this.state.coach , 
                name: input.coach.name,
                email: input.coach.email,
                username: input.coach.username,
                password: input.coach.password }
        })

        await this.setState({
            trainee1: { ...this.state.trainee1 , 
                name: input.trainee1.name,
                email: input.trainee1.email,
                username: input.trainee1.username,
                password: input.trainee1.password }
        })

        await this.setState({
            trainee2: { ...this.state.trainee2 , 
                name: input.trainee2.name,
                email: input.trainee2.email,
                username: input.trainee2.username,
                password: input.trainee2.password }
        })

        await this.setState({
            trainee3: { ...this.state.trainee3 , 
                name: input.trainee3.name,
                email: input.trainee3.email,
                username: input.trainee3.username,
                password: input.trainee3.password }
        })

        await this.registerGroup();
        console.log('registration finished' + JSON.stringify(this.state));
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
