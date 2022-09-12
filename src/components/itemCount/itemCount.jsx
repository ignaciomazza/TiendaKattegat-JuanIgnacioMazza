import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import CartProvider from '../../context/CartContext';


function ItemCount(props) {

  const {initial, stock, onAdd} = props;

  const [counter, setCounter] = useState(initial);

  const {text} = useContext(CartProvider);

  return (
    <div className='container'>
      <p>{text}</p>
      <Link to={`/cart`}><button onClick={() => onAdd(counter)} className="comprarCount">Comprar</button></Link>
      <div className='carrito'>
        <button onClick={() => setCounter(counter + 1)} disabled={counter === parseInt(stock)}>+</button>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter - 1)} disabled={counter === initial}>-</button>
      </div>
    </div>
    
  );
}

export default ItemCount;