import './ItemListContainer.css';
import ItemList from './../ItemList/ItemList.jsx';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ItemListContainer(props) {

  const {logo, h1, p} = props;
  const [productos, setProductos] = useState([]);

  useEffect(() => {

    const getData = async () => {
      const resp = await axios.get('./cervezas.json');
      const data = await resp.data;
      return data;
  }
  
  const task = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(getData())
    }, 2000);
  })

  task
    .then((resultado) => setProductos(resultado))
    .catch((err) => console.log(err))
    .finally(() => console.log("finalizo la promesa"))

  return () => {
      
  }
}, [])
  

  return (
    <div>
        <div className='logoMain'>
            <div className='textoHeader'>
                <h1>{h1}</h1>
                <p>{p}</p>
                <input type="button" value="Tienda"/>
            </div>
            <img src={logo} alt="logo" />
        </div>
        <div>
          <ItemList productos={productos}/>
        </div>
    </div>
  );
}

export default ItemListContainer;