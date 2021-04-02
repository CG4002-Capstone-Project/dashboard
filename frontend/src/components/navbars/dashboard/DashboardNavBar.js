import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
 
export class DashboardNavBar extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        // return (
        //     <Navbar bg="dark" variant="light" fixed='top' className='navbar-dark'>
        //         <Navbar.Brand href={`/${this.props.user}/dashboard`}> {`DanceEdge Coach -- ${this.props.name}`} </Navbar.Brand>
        //         <Nav variant='pills' className='nav'>
        //             <Nav.Item className='item'>
        //                 <Nav.Link href={`/${this.props.user}/dashboard`}> Dashboard </Nav.Link>
        //             </Nav.Item>
        //             <Nav.Item className='item'>
        //                 <Nav.Link href={`/${this.props.user}/availability`}> Availability </Nav.Link>
        //             </Nav.Item>
        //             <Nav.Item className='item'>
        //                 <Nav.Link href={`/${this.props.user}/demo`}> Demo </Nav.Link>
        //             </Nav.Item>
        //             <Nav.Item className='item'>
        //                 <Nav.Link href={`/${this.props.user}/settings`}> Settings </Nav.Link>
        //             </Nav.Item>
        //         </Nav>
        //     </Navbar>
        // )

        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <LinkContainer to="/">
                    <Navbar.Brand className="font-weight-bold"> DanceEdge </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="mr-auto" className="justify-content-end">
                        <LinkContainer to="/coach/dashboard">
                            <Nav.Link> Dashboard </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/coach/summary">
                            <Nav.Link> Summary </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/coach/demo">
                            <Nav.Link> Demo </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/coach/settings">
                            <Nav.Link> Settings </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        )
    }
}

export default DashboardNavBar
