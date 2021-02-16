import React, { Component } from 'react';
import { FormGroup, InputGroup, Button } from '@blueprintjs/core';

export class InputForm extends Component {
    // how to save state between changing forms: https://stackoverflow.com/questions/41190571/saving-the-values-in-forms-after-leaving-the-page-in-reactjs
    constructor(props) {
        super(props);

        if(localStorage.getItem(`formData` + this.props.activeIndex)) {
            this.state = JSON.parse(localStorage.getItem(`formData` + this.props.activeIndex));
        } else {
            this.state = {
                name: '',
                email: '',
                username: '',
                password: '',
            }
        }
    }

    onNameChange = event => {
        this.setState({ name: event.target.value }, () => {
            localStorage.setItem(`formData` + this.props.activeIndex, JSON.stringify(this.state));
        })
    }

    onEmailChange = event => {
        this.setState({ email: event.target.value }, () => {
            localStorage.setItem(`formData` + this.props.activeIndex, JSON.stringify(this.state));
        })
    }

    onUsernameChange = event => {
        this.setState({ username: event.target.value }, () => {
            localStorage.setItem(`formData` + this.props.activeIndex, JSON.stringify(this.state));
        })
    }

    onPasswordChange = event => {
        this.setState({ password: event.target.value }, () => {
            localStorage.setItem(`formData` + this.props.activeIndex, JSON.stringify(this.state));
        })
    }

    onSaveButtonClicked = event => {
        console.log(this.state)
    }

    onNextButtonClicked = event => {
        console.log('clicked');
    }

    render() {
        return (
            <React.Fragment> 
                <FormGroup>
                    <InputGroup asyncControl='true' placeholder='Name' onChange={this.onNameChange} value={this.state.name} />
                    <InputGroup asyncControl='true' placeholder='Email' onChange={this.onEmailChange} value={this.state.email}/>
                    <InputGroup asyncControl='true' placeholder='Username' onChange={this.onUsernameChange} value={this.state.username}/>
                    <InputGroup asyncControl='true' placeholder='Password' onChange={this.onPasswordChange} value={this.state.password}/>
                </FormGroup>

                {/* <form>
                    <label>
                        Name: 
                        <input type='text' name='name' onChange={this.onNameChange} value={this.state.name}/>
                    </label>

                    <label>
                        Email: 
                        <input type='text' name='email' onChange={this.onEmailChange} value={this.state.email}/>
                    </label>

                    <label>
                        Username:
                        <input type='text' name='username' onChange={this.onUsernameChange} value={this.state.username}/>
                    </label>

                    <label>
                        Password:
                        <input type='text' name='password' onChange={this.onPasswordChange} value={this.state.password}/>
                    </label>

                </form> */}

                <Button text='Save' onClick={this.onSaveButtonClicked}/>
                <Button text='Next' onClick={this.onNextButtonClicked}/>

            </React.Fragment>
        )
    }
}

export default InputForm
