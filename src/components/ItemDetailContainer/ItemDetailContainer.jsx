import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ItemDetail from './../ItemDetail/ItemDetail.jsx';
import './ItemDetailContainer.css';
import db from '../../services'
import { collection, getDocs } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([]);
    const params = useParams();

    const onAdd = (contador) => {
      alert("Se han agregado al carrito " + contador + " Heinekens")
    };

    useEffect(() => {

      const getData = async () => {
        const data = collection(db, "items");
        const col = await getDocs(data);
        const res = col.docs.map((doc) => doc={id:doc.id, ...doc.data()} );
        const product = res.find((el) => el.id == params.id);
        return product;
      }
    
      const task = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(getData())
        }, 1000);
      })
  
      task
        .then((resultado) => setProductos(resultado))
        .catch((err) => console.log(err))
  
      return () => {
            
        }
      }, [])

  return (
    <div>
        <ItemDetail key="ItemDetail" producto={productos} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetailContainer