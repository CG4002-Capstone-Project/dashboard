import React, { Component } from 'react';
import { NavBarDiv } from './LoginAndRegisterNavBarStyledComponents';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import '../../dashboard/node_modules/bootstrap/dist/css/bootstrap.min.css';
import './LoginAndRegisterNavBar.css';

// TODO the href here are all referring to trainee/login and trainee/register . trainee should be removed.

export class LoginAndRegisterNavBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="light" fixed='top' className='navbar-dark'>
                <Navbar.Brand href='home'> DanceEdge </Navbar.Brand>
                <Nav variant='pills' className='nav'>
                    <Nav.Item className='item'>
                        <Nav.Link href='register'> Register </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='item'>
                        <Nav.Link href='login'> Login </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        )
    }
}

export default LoginAndRegisterNavBar
