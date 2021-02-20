import React, { Component } from 'react';
import { NavBarDiv } from './LoginAndRegisterNavBarStyledComponents';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './LoginAndRegisterNavBar.css';

export class LoginAndRegisterNavBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="light" fixed='top' className='navbar'>
                <Navbar.Brand href='home'> DanceEdge </Navbar.Brand>
                <Nav variant='pills' className='justify-content-end'>
                    <Nav.Item>
                        <Nav.Link href='register'> Register </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='login'> Login </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        )
    }
}

export default LoginAndRegisterNavBar
