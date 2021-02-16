import React, { Component } from 'react';
import { FormGroup, InputGroup, Button } from '@blueprintjs/core';

export class InputForm extends Component {
    state = {
        name: '',
        email: '',
        username: '',
        password: '',
    }

    onNameChange = event => {
        // console.log(event.target.value);
        this.setState({
            name: event.target.value
        })
    }

    onEmailChange = event => {
        // console.log(event.target.value);
        this.setState({
            email: event.target.value
        })
    }

    onUsernameChange = event => {
        // console.log(event.target.value);
        this.setState({
            username: event.target.value
        })
    }

    onPasswordChange = event => {
        // console.log(event.target.value);
        this.setState({
            password: event.target.value
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
                    <InputGroup placeholder='Name' onChange={this.onNameChange} />
                    <InputGroup placeholder='Email' onChange={this.onEmailChange} />
                    <InputGroup placeholder='Username' onChange={this.onUsernameChange} />
                    <InputGroup placeholder='Password' onChange={this.onPasswordChange}/>
                </FormGroup>
                <Button text='Save' onClick={this.onSaveButtonClicked}/>
                <Button text='Next' onClick={this.onNextButtonClicked}/>

            </React.Fragment>
        )
    }
}

export default InputForm
