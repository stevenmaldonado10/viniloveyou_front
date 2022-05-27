import React from 'react'
import {useCart} from 'react-use-cart'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {NavLink} from 'react-router-dom'
import logo from '../images/vinylblue.svg'
import axios from 'axios' 

function BuyVinyls() {

  const{items, 
    isEmpty, 
    totalItems, 
    totalUniqueItems, 
    cartTotal, 
    updateItemQuantity, 
    removeItem, 
    emptyCart } = useCart();
  
   if(isEmpty) return window.location.href="./"

   const fetchData = async () => {
    try {
      const response = await  axios.post('https://viniloveyou.herokuapp.com/api/buy', {
        title: 'Buy vinyls',
        price : cartTotal,
      quantity: totalItems})
      
      
      window.location.href=response.data
    }
     catch (error) {
      console.log(error);
    }
  };

  

  return (

    <>
    <Navbar collapseOnSelect expand="lg" variant='dark' bg='primary' >
    <img src={logo}  width="100" height="50" />

   <Navbar.Brand >ViniLoveYou</Navbar.Brand>
   <Navbar.Toggle aria-controls='responsive-navbar-nav'></Navbar.Toggle>
   <Navbar.Collapse id='responsive-navbar-nav' >
       
   <Nav className='me-auto'>
   
           
   </Nav>

       <Nav >
          <Nav.Link as={NavLink} to="/vinyls">Vinyls</Nav.Link>
           <Nav.Link as={NavLink} to="/login">Log Out</Nav.Link>
          
       </Nav>

   </Navbar.Collapse>


</Navbar>

<h1 className='vinyls_h1'>Shopping Cart</h1>

   <section className='py-4 container'>
      <div className='row justify-content-center' >
    <div className='col-12'>
      
        <table className='table table-light table-hover m-0' >
          <tbody>
          {
            items.map((item, index)=>{
              return(
                <><tr>
                  <td><strong>Vinyl</strong></td>
                  <td><strong>Album</strong></td>
                  <td><strong>Artist</strong></td>
                  <td><strong>Price</strong></td>
                  <td><strong>Quantity</strong></td>
                  <td><strong>Total</strong></td>
                </tr><tr key={index}>
                    <td>
                      <img src={item.image} style={{ height: '6rem' }} />
                    </td>
                    <td>{item.album}</td>
                    <td>{item.artist}</td>
                    <td>${item.price}</td>
                    <td>Quantity ({item.quantity})</td>
                    <td>Total: ${item.price * item.quantity}</td>
                    <td>
                      <button className='btn btn-info ms-2'
                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                      <button className='btn btn-info ms-2'
                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                      <button className='btn btn-danger ms-2'
                        onClick={() => removeItem(item.id)}>Remove</button>
                    </td>
                  </tr></>
                )
              }
            )
          }
          </tbody>
          </table>     
          </div>
          <div className='col-auto ms-auto'>
          
            <h4 className='buyvinyls_h2'> Total Price: $ {cartTotal}</h4>

          </div>
          <div className='col-auto'>
            <button className='btn btn-danger m-2' onClick={emptyCart} >Remove all</button>
            <button onClick={()=>fetchData()} className='btn btn-primary m-2' >Buy Now</button>
          </div>

    </div>
    </section>
    </>
  )
  
}

export default BuyVinyls