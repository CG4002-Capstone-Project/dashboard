import { TextInputField } from 'evergreen-ui';
import React, { Component } from 'react';
import { InputFormDiv } from './InputFormStyledComponents';

export class InputForm extends Component {
    render() {
        return (
            <InputFormDiv>
                <TextInputField label='Name' required={true} isInvalid={true} validationMessage='This field is required' />
                <TextInputField label='Email' required={true} isInvalid={true} validationMessage='This field is required' />
                <TextInputField label='Username' required={true} isInvalid={true} validationMessage='This field is required' />
                <TextInputField label='Password' required={true} isInvalid={true} validationMessage='This field is required' />
            </InputFormDiv>
        )
    }
}

export default InputForm




