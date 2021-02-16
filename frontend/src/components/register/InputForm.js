import React, { Component } from 'react';
import { FormGroup, InputGroup, Button } from '@blueprintjs/core';

export class InputForm extends Component {
    // how to save state between changing forms: https://stackoverflow.com/questions/41190571/saving-the-values-in-forms-after-leaving-the-page-in-reactjs
    constructor(props) {
        super(props);
        this.formName = `formData` + this.props.activeIndex;

        if(localStorage.getItem(this.formName)) {
            this.state = JSON.parse(localStorage.getItem(this.formName));
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
            localStorage.setItem(this.formName, JSON.stringify(this.state));
        })
    }

    onEmailChange = event => {
        this.setState({ email: event.target.value }, () => {
            localStorage.setItem(this.formName, JSON.stringify(this.state));
        })
    }

    onUsernameChange = event => {
        this.setState({ username: event.target.value }, () => {
            localStorage.setItem(this.formName, JSON.stringify(this.state));
        })
    }

    onPasswordChange = event => {
        this.setState({ password: event.target.value }, () => {
            localStorage.setItem(this.formName, JSON.stringify(this.state));
        })
    }

    onSaveButtonClicked = event => {
        console.log(this.props);
        event.preventDefault();
        this.props.onSave(this.state);
    }

    onNextButtonClicked = event => {
        console.log('clicked');
    }

    render() {
        return (
            <React.Fragment> 
                <FormGroup label='Name' labelInfo='Required' helperText='This will be the name used in the dashboard' inline={true}>
                    <InputGroup asyncControl={true} placeholder='Name' onChange={this.onNameChange} value={this.state.name} />
                </FormGroup>

                <br></br>
                <FormGroup label='Email' labelInfo='Required' helperText='For contact purposes' inline={true}>
                    <InputGroup asyncControl={true} placeholder='Email' onChange={this.onEmailChange} value={this.state.email}/>
                </FormGroup>
                <br></br>

                <FormGroup label='Username' labelInfo='Required' helperText='This will be used to sign into the dashboard' inline={true}>
                    <InputGroup asyncControl={true} placeholder='Username' onChange={this.onUsernameChange} value={this.state.username}/>
                </FormGroup>
                <br></br>

                <FormGroup label='Password' labelInfo='Required' helperText='This will be used to sign into the dashboard' inline={true}>
                    <InputGroup asyncControl={true} placeholder='Password' onChange={this.onPasswordChange} value={this.state.password}/>
                </FormGroup>
                <Button text='Save' onClick={this.onSaveButtonClicked}/>
                <Button text='Next' onClick={this.onNextButtonClicked}/>
                

            </React.Fragment>
        )
    }
}

export default InputForm
