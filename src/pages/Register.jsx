import React, {useState} from 'react'
import {Button, Col, Container, form, Row} from "react-bootstrap";
import emailjs from '@emailjs/browser'

const axios = require('axios');

const Register = () => {

  const [datos, setDatos] = useState({
    
    name:'',
    address:'',
    email: '',
    cellphone:'',
    password: ''
})

const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
        ...datos,
        [event.target.name] : event.target.value
        
    })
}

const enviarDatos = async (event) => {
    event.preventDefault()
    const res = await axios.post('https://viniloveyou.herokuapp.com/api/register',datos)
    emailjs.sendForm('service_axak76g','template_8c2qi8v',event.target,'95zewK6xw8uoNG0qo')
    //.then(response => console.log(response))
    if(res.data.message.email){
      alert('Welcome Vinilover')
      window.location.href="./login"
    console.log(res.data.message)}
    else{}
}

  return (
    <Container>
      
    <Row className="mt-5">
    <Col lg={5} md={6} sm={12} className="p-3 m-auto shadow-sm rounded-lg">
    <form onSubmit={enviarDatos}>
    <h3 className="text-center mb-3">Sign Up</h3>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={handleInputChange} name="name"
          />
        </div>
        
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={handleInputChange} name="email"
          />
        </div>

        <div className="mb-3">
          <label>Address</label>
          <input type="text" className="form-control" placeholder="Address" onChange={handleInputChange} name="address"/>
        </div>

        <div className="mb-3">
          <label>Cell Phone</label>
          <input
            type="number"
            className="form-control"
            placeholder="Cell phone"
            onChange={handleInputChange} name="cellphone"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={handleInputChange} name="password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
       
      </form>
      </Col>
      </Row>
      </Container>
  )
}

export default Register