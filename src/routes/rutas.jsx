import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer.jsx';
import logo from '../components/logo.jpg';
import menu from '../components/bx-menu.svg';
import NavBar from '../components/NavBar/NavBar.jsx';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer.jsx';
import Cart from '../components/Cart/Cart.jsx';
import Nosotros from '../components/Nosotros/Nosotros.jsx';

const rutas = () => {
  

  return (
      <BrowserRouter>
        <NavBar key="Nav" menu={menu} logo={logo}/>
        <Routes>
            <Route path="/" element={<ItemListContainer key="ItemListContainer" logo={logo} h1="Tienda Kattegat" p="Encontra todos nuestros productos haciendo click"/>}/>
            <Route path="/item-detail/:id" element={<ItemDetailContainer/>}/>
            <Route path="/category/:id" element={<ItemListContainer key="ItemListContainer" logo={logo} h1="Tienda Kattegat" p="Encontra todos nuestros productos haciendo click"/>}/>
            <Route path="/cart" element={<Cart key="Cart"/>}/>
            <Route path="/nosotros" element={<Nosotros key="nosotros" logo={logo} h1="Tienda Kattegat" p="Una empresa dedicada a traer las mejores cervezas al mejor precio"/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default rutas