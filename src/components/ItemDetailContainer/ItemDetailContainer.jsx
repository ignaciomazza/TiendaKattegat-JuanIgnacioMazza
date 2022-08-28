import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ItemDetail from './../ItemDetail/ItemDetail.jsx';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {

  const params = useParams();
  console.log(params.id)

    const [productos, setProductos] = useState([]);

    useEffect(() => {

      const getData = async () => {
        const resp = await axios.get('../cervezas.json');
        const data = await resp.data;
        return data;
      }
    
      const task = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(getData())
        }, 2000);
      })
  
      task
        .then((resultado) => setProductos(resultado[params.id]))
        .catch((err) => console.log(err))
        .finally(() => console.log("finalizo la promesa"))
  
      return () => {
            
        }
      }, [])

  return (
    <div>
        {/* <div>{console.log(productos.tittle)}</div> */}
        <ItemDetail key="ItemDetail" tittle={productos.tittle} price={productos.price} stock={productos.stock} pictureUrl={productos.pictureUrl}/>
        {/* <img src={productos.pictureUrl} alt=""/>
         <div className='comprar'>
             <h5>{productos.tittle}</h5>
             <p>{productos.price}</p>
             <input type="button" value="Ver detalles de producto"/>
             <p className='stock'>Stock disponible: {productos.stock}</p>
          </div> */}
    </div>
  )
}

export default ItemDetailContainer