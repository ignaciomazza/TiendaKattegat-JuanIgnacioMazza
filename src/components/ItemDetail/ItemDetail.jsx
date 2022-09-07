import React from 'react'
import ItemCount from '../itemCount/itemCount.jsx';

const ItemDetail = (props) => {

  const {producto, onAdd} = props;

  

  return (
    <div className='containerProductoDetail'>
        <img src={producto.pictureUrl} alt=""/>
        <div className='comprarDetail'>
            <h5>{producto.tittle}</h5>
            <p>{producto.price}</p>
            <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
            <p className='stockDetail'>Stock disponible: {producto.stock}</p>
        </div>
    </div>
  )
}

export default ItemDetail