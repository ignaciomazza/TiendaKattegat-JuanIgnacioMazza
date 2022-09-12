import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer.jsx';
import logo from '../components/logo.jpg';
import NavBar from '../components/NavBar/NavBar.jsx';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer.jsx';
import Cart from '../components/Cart/Cart.jsx';
import ItemList from '../components/ItemList/ItemList.jsx';
import axios from 'axios';
import CartProvider from '../context/CartContext.jsx';

const rutas = () => {
  

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar key="Nav" logo={logo}/>
        <Routes>
            <Route path="/" element={<ItemListContainer key="ItemListContainer" logo={logo} h1="Tienda Kattegat" p="Encontra todos nuestros productos haciendo click"/>}/>
            <Route path="/item-detail/:id" element={<ItemDetailContainer/>}/>
            <Route path="/category/:id" element={<ItemListContainer key="ItemListContainer" logo={logo} h1="Tienda Kattegat" p="Encontra todos nuestros productos haciendo click"/>}/>
            <Route path="/cart" element={<Cart key="Cart"/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
    
  )
}

export default rutas