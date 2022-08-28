import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer.jsx';
import logo from '../components/logo.jpg';
import NavBar from '../components/NavBar/NavBar.jsx';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer.jsx';

const rutas = () => {
  return (
    <BrowserRouter>
        <NavBar key="Nav" logo={logo}/>
        <Routes>
            <Route path="/" element={<ItemListContainer key="ItemListContainer" logo={logo} h1="Tienda Kattegat" p="Encontra todos nuestros productos haciendo click"/>}/>
            <Route path="item-detail/:id" element={<ItemDetailContainer/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default rutas