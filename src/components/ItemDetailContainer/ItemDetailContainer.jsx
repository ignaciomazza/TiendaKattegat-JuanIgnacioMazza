import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ItemDetail from './../ItemDetail/ItemDetail.jsx';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([]);
    const params = useParams();

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
        <ItemDetail key="ItemDetail" tittle={productos.tittle} price={productos.price} stock={productos.stock} pictureUrl={productos.pictureUrl}/>
    </div>
  )
}

export default ItemDetailContainer