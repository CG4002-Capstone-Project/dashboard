import React, { Component } from 'react';

import { LoginDiv, NavBarDiv, MainDiv, ContentDiv, LoginMainFormDiv, SideContentDiv,
    LoginH2Div, LoginH1, LoginFormDiv, IndividualField } from './LoginStyledComponents';
import LoginAndRegisterNavBar from '../navbars/login-register/LoginAndRegisterNavBar';
import { TextInputField, Button } from 'evergreen-ui';

export class Login extends Component {
    state = {
        email: '',
        password: '',
        onSave: false,
    }

    handleLoginProcess() {
        
    }

    onSubmitButtonClicked = async (event) => {
        event.preventDefault();
        console.log('Login Page Submit button clicked');
        await this.setState({ 
            onSave: true,
        });
        console.log(JSON.stringify(this.state));
        await this.handleLoginProcess();
    }

    render() {
        return (
            <LoginDiv>
                <NavBarDiv>
                    <LoginAndRegisterNavBar />
                </NavBarDiv>
                <MainDiv>
                    <ContentDiv>
                        <LoginMainFormDiv>
                            <LoginFormDiv>
                                <IndividualField>
                                    <TextInputField placeholder="Email" margin='auto' width={400} onChange={e => this.setState({ email: e.target.value })} />
                                </IndividualField>

                                <IndividualField>
                                    <TextInputField placeholder="Password" margin='auto' width={400} onChange={e => this.setState({ password: e.target.value })} />
                                </IndividualField>

                                <IndividualField>
                                    <Button onClick={this.onSubmitButtonClicked} >Submit</Button>
                                </IndividualField>

                            </LoginFormDiv>
                        </LoginMainFormDiv>
                        <SideContentDiv>
                            <LoginH2Div>
                                <LoginH1> Login </LoginH1>
                            </LoginH2Div>

                        </SideContentDiv>
                    </ContentDiv>
                </MainDiv>
            </LoginDiv>
        )
    }
}

export default Login
