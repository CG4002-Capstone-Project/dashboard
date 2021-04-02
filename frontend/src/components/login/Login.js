import React, { Component } from 'react';

import { LoginDiv, NavBarDiv, MainDiv, ContentDiv, LoginMainFormDiv, SideContentDiv,
    LoginH2Div, LoginH1, LoginFormDiv, IndividualField } from './LoginStyledComponents';
import LoginAndRegisterNavBar from '../navbars/login-register/LoginAndRegisterNavBar';
import { TextInputField, Button } from 'evergreen-ui';
import { login } from '../../utils/Auth';
import { UserContext } from '../../contexts/UserContext';

export class Login extends Component {
    static contextType = UserContext;

    state = {
        email: '',
        password: '',
        onSave: false,
    }

    async handleLoginProcess() {
        const email = this.state.email;
        const password = this.state.password;
        const { user, handleUser } = this.context;

        console.log('CONTEXT 1', this.context);
        console.log('LOGIN STATE', this.state);
        await handleUser({ ...user, isFetching: true });
        try {
            // console.log('CONTEXT 2', this.context);
            const role = login({ email, password });
            // console.log(role);
            // console.log('CONTEXT 3', this.context);
            await handleUser({
                ...user,
                email,
                role,
                isAuth: true,
                isFetching: true,
            });
            // console.log('CONTEXT 4', this.context);
            // console.log('LOCAL STORAGE ', getAccessToken(), getName());

        } catch {
            await handleUser({ ...user, isAuth: false, isFetching: false });
        }
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
                {/* <NavBarDiv>
                    
                    <Navbar />
                </NavBarDiv> */}
                <LoginAndRegisterNavBar />
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
