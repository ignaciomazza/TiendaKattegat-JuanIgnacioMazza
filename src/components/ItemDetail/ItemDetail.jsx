import React from 'react'

const ItemDetail = (props) => {

  const {tittle, price, stock, pictureUrl} = props;

  return (
    <div className='containerProductoDetail'>
        <img src={pictureUrl} alt=""/>
        <div className='comprarDetail'>
            <h5>{tittle}</h5>
            <p>{price}</p>
            <input type="button" value="Comprar"/>
            <p className='stockDetail'>Stock disponible: {stock}</p>
        </div>
    </div>
  )
}

export default ItemDetail