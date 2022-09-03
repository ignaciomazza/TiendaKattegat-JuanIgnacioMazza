import React from 'react'
import ItemCount from '../itemCount/itemCount.jsx';

const ItemDetail = (props) => {

  const {tittle, price, stock, pictureUrl, onAdd} = props;

  

  return (
    <div className='containerProductoDetail'>
        <img src={pictureUrl} alt=""/>
        <div className='comprarDetail'>
            <h5>{tittle}</h5>
            <p>{price}</p>
            <ItemCount initial={1} stock={stock} onAdd={onAdd}/>
            <p className='stockDetail'>Stock disponible: {stock}</p>
        </div>
    </div>
  )
}

export default ItemDetail