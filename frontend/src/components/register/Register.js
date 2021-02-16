import React, { Component } from 'react'
import VerticalTab from './VerticalTab';

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

    currentTab = (currentIndex) => {
        this.setState({
            activeIndex: currentIndex,
        })
    }
    render() {
        return (
            <div>
                <VerticalTab onTabChange={this.currentTab}/>
                {this.state.activeIndex}
            </div>
        )
    }
}

export default Register
