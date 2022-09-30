import React, { useState, useContext } from 'react';
import {CartContext} from '../../context/CartContext';
import { Link } from "react-router-dom";
import './Cart.css';
import db from '../../services'
import { collection, addDoc } from 'firebase/firestore';

const Cart = () => {

  const {carrito, removeItem} = useContext(CartContext); 
  
  const total = carrito.reduce((pv, cv)=> pv + (cv.price * cv.quantity), 0)

  const [formulario, setFormulario] = useState({
    buyer: {
      email: "",
      nombre: "",
      apellido: "",
      telefono: ""
    },
    items: carrito,
    total: total
  });

  const {buyer: {email, nombre, apellido, telefono}, } = formulario;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      buyer: {
        ...formulario.buyer,
        [name]: value
      }
    });
  }

  const setInFireBase = async (orden) => {
    console.log(orden.buyer.email)
    if (orden.buyer.email != "" && orden.buyer.nombre != "" && orden.buyer.apellido != "" && orden.buyer.telefono != "") {
      try {
        const data = collection(db, "ordenes");
        const col = await addDoc(data, orden);
        alert("Su numero de orden es: " + col.id)
      } catch (error) {
        console.log(error)
      }
    }else{
      alert("Complete todos los campos para poder realizar la compra")
    }
    
  }

  return (
    <div className='CartContainer'>
      <div className='formContainer'>
        {!carrito.length && <div>
          <h1>No hay items en su carrito</h1>
          <Link to={`/category/all`}><button className='volver'>Volver</button></Link>
        </div>}
        {carrito.length && 
        <div className='CartProductos'>
          <ul>
            {carrito.map(((item, index) => <li key={index}><p>{item.title} - {item.quantity}</p><button onClick={() => removeItem(item.id)}  className="eliminarCartProduct">Eliminar</button></li>))}
          </ul>
        </div>}
        <div className='form'>
          <input type="text" name="nombre" placeholder='Nombre' value={nombre} onChange={handleChange}/>
          <input type="text" name="apellido" placeholder='Apellido' value={apellido} onChange={handleChange}/>
          <input type="email" name="email" placeholder='Email' value={email} onChange={handleChange}/>
          <input type="text" name="telefono" placeholder='Telefono' value={telefono} onChange={handleChange}/>
        </div>
      </div>
      <div>
        <button className="comprarCount" onClick={() => setInFireBase(formulario)}>Terminar compra</button>
      </div>
      </div>
  )
}

export default Cart