import React, { Component } from 'react'

export class Register extends Component {
    
    state = { 
        activeIndex: 0,
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

    render() {
        return (
            <div>
                {this.state.activeIndex}
            </div>
        )
    }
}

export default Register
