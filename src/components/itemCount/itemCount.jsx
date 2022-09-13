import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import {CartContext} from '../../context/CartContext';


function ItemCount(props) {

  const {initial, producto, onAdd} = props;

  const [counter, setCounter] = useState(initial);

  const {addItem} = useContext(CartContext); 

  return (
    <div className='container'>
      <Link to={`/cart`}><button onClick={() => addItem(producto, counter)}  className="comprarCount">Comprar</button></Link>
      <div className='carrito'>
        <button onClick={() => setCounter(counter + 1)} disabled={counter === parseInt(producto.stock)}>+</button>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter - 1)} disabled={counter === initial}>-</button>
      </div>
    </div>
    
  );
}

export default ItemCount;