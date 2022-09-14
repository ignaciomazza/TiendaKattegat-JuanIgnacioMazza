import React, { useState, useContext } from 'react';
import {CartContext} from '../../context/CartContext';
import { Link } from "react-router-dom";
import './Cart.css';

const Cart = () => {

  const {carrito, removeItem} = useContext(CartContext); 

  return (
    <div className='CartContainer'>
      {!carrito.length && <div>
        <h1>No hay items en su carrito</h1>
        <Link to={`/category/all`}><button>Volver</button></Link>
      </div>}
      {carrito.length && 
      <div className='CartProductos'>
        <ul>
          {carrito.map(((item, index) => <li key={index}><p>{item.tittle} - {item.quantity}</p><button onClick={() => removeItem(item.id)}  className="eliminarCartProduct">Eliminar</button></li>))}
        </ul>
        <div>
          <button className="comprarCount">Terminar compra</button>
        </div>
      </div>}
    </div>
  )
}

export default Cart