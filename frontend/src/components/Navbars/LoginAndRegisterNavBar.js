import React, { Component } from 'react';
import { NavBarDiv } from './LoginAndRegisterNavBarStyledComponents';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export class LoginAndRegisterNavBar extends Component {
    render() {
        return (
            <Navbar bg='dark' fixed='top' className='navbar'>
                <Navbar.Brand href='home'> DanceEdge </Navbar.Brand>
                <Nav.Link href='register'> Register </Nav.Link>
                <Nav.Link href='login'> Login </Nav.Link>
            </Navbar>
        )
    }
}

export default LoginAndRegisterNavBar
