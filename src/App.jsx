import React, { Component } from 'react'
import { Route, Routes } from 'react-router'

import NavBar from './Elements/NavBar'
import MyFooter from './Elements/MyFooter'
import MyCart from './Elements/MyCart'
import MainPage from './Pages/MainPage'
import ContainerCard from './Pages/ContainerCard'
import Login from './Pages/Login'
import NONPage from './Pages/NONPage'
import CreateUser from './Pages/CreateUser'
import { ProductProvider } from './Context/ProductContext'
import { CartProvider } from './Context/CartContext'



export default class App extends Component {
  render() {
    return (
        <>
            <div className="myPage " style={{width:"100%",height:"100%vh" ,backgroundColor:"#222529"}}>
              <ProductProvider>
                <CartProvider>
                <NavBar/>
                <Routes>
                  <Route path="/" element={<MainPage/>} />
                  <Route path="login" element={<Login/>} />
                  <Route path="store" element={<ContainerCard/>} />
                  <Route path="signUp" element={<CreateUser/>} />
                  <Route path="myCart" element={<MyCart/>} />
                  <Route path="*" element={<NONPage/>} />
                </Routes>
                <MyFooter/>
                </CartProvider>
              </ProductProvider>
            </div>
           
        </>
    )
  }
}
