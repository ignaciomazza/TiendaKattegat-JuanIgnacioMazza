import React, { useState } from 'react';


function ItemCount(props) {

  const {initial, stock, onAdd} = props;

  const [counter, setCounter] = useState(initial);

  

  return (
    <div className='container'>
      <div className='carrito'>
        <button onClick={() => setCounter(counter + 1)} disabled={counter === parseInt(stock)}>+</button>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter - 1)} disabled={counter === initial}>-</button>
      </div>
      <button onClick={() => onAdd(counter)} className="comprarCount">Comprar</button>
    </div>
    
  );
}

export default ItemCount;