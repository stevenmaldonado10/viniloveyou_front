import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ItemCard from './ItemCard'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {NavLink} from 'react-router-dom'
import logo from '../images/vinylblue.svg'
import {useCart} from 'react-use-cart'

function Vinyls  ()  {
  const{items, 
    isEmpty, 
    totalItems, 
    totalUniqueItems, 
    cartTotal, 
    updateItemQuantity, 
    removeItem, 
    emptyCart } = useCart();

  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await  axios.get('https://viniloveyou.herokuapp.com/api/vinyls')
        

        setList(response.data.message);
        console.log(response.data);
      }
       catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [setList]);




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
                <h5>{totalItems}</h5>
                <Nav.Link as={NavLink} to="/vinyls/buy">Buy</Nav.Link>
                <Nav.Link as={NavLink} to="/login">Log Out</Nav.Link>
               
            </Nav>

        </Navbar.Collapse>


    </Navbar>



    <h1 className='text-center mt-3'>All Items</h1>
    
    <section className='py-4 container'>     
      <div className='row justify-content-center'>
          {
            list.map((item, index)=>{
              return(
                <ItemCard image={item.image} album={item.album} artist={item.artist} price={item.price} genre={item.genre} item={item} key={index} ></ItemCard>
              )
            })
          }
      </div>
    </section>
    </>
   
  )
}

export default Vinyls