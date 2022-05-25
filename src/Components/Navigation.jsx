import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {NavLink} from 'react-router-dom'
import logo from '../images/vinylblue.svg'

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant='dark' bg='primary' >
         <img src={logo}  width="100" height="50" />

        <Navbar.Brand as={NavLink} to="/">ViniLoveYou</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav'></Navbar.Toggle>
        <Navbar.Collapse id='responsive-navbar-nav' >
            
            <Nav className='me-auto'>
                <Nav.Link as={NavLink} to="/vinyls">Vinyls</Nav.Link>
                <Nav.Link as={NavLink} to="/admin/users">Users</Nav.Link>
            </Nav>

            <Nav >
                <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
                <Nav.Link as={NavLink} to="/account">Account</Nav.Link>
            </Nav>

        </Navbar.Collapse>


    </Navbar>
  )
}

export default Navigation