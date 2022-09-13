import React, { useState, useContext } from 'react';
import {CartContext} from '../../context/CartContext';

const Cart = () => {

  const {carrito} = useContext(CartContext); 

  return (
    <div>
      {!carrito.length && <span>No hay items en su carrito</span>}
      {carrito.length && 
      <ol>
        {carrito.map(((item, index) => <li key={index}>{item.tittle} - {item.quantity}</li>))}
      </ol>}
      
    </div>
  )
}

export default Cart