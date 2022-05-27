import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ItemCard from './ItemCard'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {NavLink} from 'react-router-dom'
import logo from '../images/vinylblue.svg'
import {useCart} from 'react-use-cart'
import carrito from '../images/carrito.svg'

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
  const [busqueda, setBusqueda] = useState('');

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

const handleChange = e=>{
  e.preventDefault()
  //setBusqueda(e.target.value)
  //filtrar(e.traget.value)
  console.log(e.target.value)
}

const filtrar=(terminoBusqueda)=>{
  const resultadoBusqueda = list.filter((elemento)=>{
    if(elemento.album.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    ||elemento.artist.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    ){
      return elemento;
    }
  });

  setList(resultadoBusqueda);
}

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
              
                <h5 className='vinyls_totalItem'>({totalItems})</h5>
                <Nav.Link ><input type="text" value={busqueda} placeholder="Search album or artist" onChange={handleChange} >

</input></Nav.Link>
                <Nav.Link as={NavLink} to="/vinyls/buy"><img src={carrito}  width="30" height="30" /></Nav.Link>
                <Nav.Link as={NavLink} to="/">Log Out</Nav.Link>
               
            </Nav>

        </Navbar.Collapse>


    </Navbar>



    <h1 className='vinyls_h1'>All Vinyls</h1>
    
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