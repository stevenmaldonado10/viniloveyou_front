import React from 'react'

import {Button, Col, Container, Form, Row} from "react-bootstrap";
import { motion } from 'framer-motion/dist/framer-motion'
import './help.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {NavLink} from 'react-router-dom'
import logo from '../images/vinylblue.svg'

const Home = () => {
  return (
    
    <>
    
    <Navbar collapseOnSelect expand="lg" variant='dark' bg='primary' >
         <img src={logo}  width="100" height="50" />

        <Navbar.Brand as={NavLink} to="/">ViniLoveYou</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav'></Navbar.Toggle>
        <Navbar.Collapse id='responsive-navbar-nav' >
            
            <Nav className='me-auto'>
                
                
            </Nav>

            <Nav >
                <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
                
            </Nav>

        </Navbar.Collapse>


    </Navbar>



    <div className='home-logo'>
    
    <motion.img
    initial ={{y:30}}
    animate={{
    y:90,
    transition:{
      duration:2,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse"
    },

    }} 
       src={logo}  width="400" height="400"  />
    </div>

    <div className='home-leyend'>
      <h1>ViniLoveYou</h1>
      <p>
      Welcome vinilover! Here you will find all the vinyl music of your choice. Rock, Hip hop, Metal, Pop, Salsa, vallenato and more.
      </p>

      <p>
      register now and you will get many benefits!
      </p>

      <p>
      Ubication: Bogotá D.C. - Colombia
      </p>

    </div>
    <div className='home-footer'>
      <p>all rights reserved © 2022</p>
    </div>
    </>
    
  )
}

export default Home