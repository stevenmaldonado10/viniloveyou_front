import React from 'react'
import {BrowserRouter, Routes, Route, Redirect} from "react-router-dom"
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Account from '../pages/Account'
import Vinyls from '../pages/Vinyls'
import VinylDescription from '../pages/VinylDescription'
import Users from '../pages/admin/Users'
import Layout from '../Components/Layout'
import BuyVinyls from '../pages/BuyVinyls'
import {CartProvider} from 'react-use-cart';


const AppRouter = () => {
  return (
   
   <BrowserRouter>
   
   <CartProvider>
   <Routes>
     
       <Route exact path='/' element={<Home/>} ></Route>
       <Route exact path='/login' element={<Login/>} ></Route>
       <Route exact path='/register' element={<Register/>} ></Route>
       <Route exact path='/account' element={<Account/>} ></Route>
       <Route exact path='/vinyls' element={<Vinyls  />} ></Route>
       <Route exact path='/vinyls/buy' element={<BuyVinyls  />} ></Route>
       <Route exact path='/vinyls/:id' element={<VinylDescription/>} ></Route>
       <Route exact path='/admin/users' element={<Users/>} ></Route>
      
   </Routes>
   </CartProvider>
   
   </BrowserRouter>
 
  )
}

export default AppRouter
