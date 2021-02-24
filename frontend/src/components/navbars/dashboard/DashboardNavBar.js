import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DashboardNavBar.css';
 
export class DashboardNavBar extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Navbar bg="dark" variant="light" fixed='top' className='navbar-dark'>
                <Navbar.Brand href={`/${this.props.user}/dashboard`}> {`DanceEdge Coach -- ${this.props.name}`} </Navbar.Brand>
                <Nav variant='pills' className='nav'>
                    <Nav.Item className='item'>
                        <Nav.Link href={`/${this.props.user}/dashboard`}> Dashboard </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='item'>
                        <Nav.Link href={`/${this.props.user}/availability`}> Availability </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='item'>
                        <Nav.Link href={`/${this.props.user}/demo`}> Demo </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='item'>
                        <Nav.Link href={`/${this.props.user}/settings`}> Settings </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        )
    }
}

export default DashboardNavBar
