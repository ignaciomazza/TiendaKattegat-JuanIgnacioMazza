import React, { useState, useContext } from 'react';
// import { GlobalContext } from '../../context/CartContext';


function ItemCount(props) {

  const {initial, stock, onAdd} = props;

  const [counter, setCounter] = useState(initial);

  // const {carrito} = useContext(GlobalContext);

  return (
    <div className='container'>
      <button onClick={() => onAdd(counter)} className="comprarCount">Comprar</button>
      <div className='carrito'>
        <button onClick={() => setCounter(counter + 1)} disabled={counter === parseInt(stock)}>+</button>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter - 1)} disabled={counter === initial}>-</button>
      </div>
    </div>
    
  );
}

export default ItemCount;