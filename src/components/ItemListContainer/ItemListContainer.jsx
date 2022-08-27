import './ItemListContainer.css';
import ItemList from './../ItemList/ItemList.jsx';
import React, { useState, useEffect } from 'react';

const data = [
  {id : "1", tittle : "Patagonia Sendero Sur", price : "$230", pictureUrl : "https://media.tada.com.ar/produc_variant/00000484_bdcb56ce-a437-48f3-a96b-916a2841cf9b.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2", stock: "23"},
  {id : "2", tittle : "Heineken", price : "$210", pictureUrl : "https://media.tada.com.ar/produc_variant/00000134_a0d8d4b0-81e5-497a-857b-bca78239d4f4.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2", stock: "64"},
  {id : "3", tittle : "Imperial Golden", price : "$190", pictureUrl : "https://media.tada.com.ar/produc_variant/00001444_adc1afe7-9655-4b88-9ee0-2a8dca2d4528.jpg?auto=compress,format&fit=max&w=undefined&h=200&dpr=2", stock: "17"}
];

function ItemListContainer(props) {

  const {logo, h1, p} = props;
  const [productos, setProductos] = useState([]);

  useEffect(() => {
  
  const task = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
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