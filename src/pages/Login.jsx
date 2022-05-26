import React, {useState} from 'react'
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';

const axios = require('axios');

const Login = () => {

  const [datos, setDatos] = useState({
    email: '',
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
    const navigate = useNavigate();
    const res = await axios.post('https://viniloveyou.herokuapp.com/api/login',datos)
    
      if(res.data.user.email){
        //alert('Welcome Vinilover')
        //window.location.href="https://superlative-chebakia-5341e4.netlify.app/vinyls"
       
        
        navigate("./vinyls")
  
        
        console.log(res.data.user)
      }else{
        alert('no existe este usuario')
      }
    
    

    //if(res.data.user.address)
    

    
}

  return (
    <Container>
      <h1 className="shadow-sm  mt-5 p-3 text-center rounded text-primary">¡Welcome Vinilover!</h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
    <Form onSubmit={enviarDatos} >
      
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={handleInputChange} name="email" />
                <Form.Text className="text-muted">
                 We'll never share your email with anyone else.
                </Form.Text>
          </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"  onChange={handleInputChange} name="password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        
        <Button btn btn-primary  type="submit">
          Submit
        </Button>
    </Form>
    </Col>
    </Row>
    </Container>
  )
}

export default Login