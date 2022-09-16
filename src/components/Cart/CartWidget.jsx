import React, { useState, useContext } from 'react';
import {CartContext} from '../../context/CartContext';
import { Link } from "react-router-dom";
import './Cart.css';

const CartWidget = (props) => {

  const {cart} = props;

  const {carrito, removeItem} = useContext(CartContext); 

  const [estado, setEstado] = useState(false);

  function aparecerCart (valor) {
    if (valor){
      setEstado(false)
      console.log(estado)
    }else{
      setEstado(true)
      console.log(estado)
    }
  }

  return (
    <div className='cart'>
        {carrito.length && <div className='widget'><button onClick={() => aparecerCart(estado)} className="buttonWidget"><img src={cart} alt="cart" /></button><div><p>{carrito.length}</p></div></div>}
        {estado == true && <div className="widgetProductos">
          {carrito.map(((item, index) => <li key={index}>{item.title} - {item.quantity} <button onClick={() => {
            removeItem(item.id)
            aparecerCart(estado)
          }}  className="eliminarCartWidget">Eliminar</button></li>))}
          <Link to={`/cart`}><button className="comprarWidget">Terminar compra</button></Link>
        </div>}
    </div>
  );
}

export default CartWidget;