import './ItemListContainer.css';
import ItemList from './../ItemList/ItemList.jsx';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import db from '../../services'
import { doc, collection, getDocs } from 'firebase/firestore';

function ItemListContainer(props) {

  const {logo, h1, p} = props;
  const [productos, setProductos] = useState([]);
  const [productosHome, setProductosHome] = useState([]);
  const params = useParams();
  const ProductosTienda = params ? productos.filter((item) => item.marca === params.id) : productos

  useEffect(() => {

    const getData = async () => {
      const data = collection(db, "items");
      const col = await getDocs(data);
      const res = col.docs.map((doc) => doc={id:doc.id, ...doc.data()} );
      return res;
  }
  
  const task = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(getData())
      
    }, 1000);
  })

  task
    .then((resultado) => {
      setProductos(resultado)
    })
    .catch((err) => console.log(err))

  return () => {
      
  }
}, [])

useEffect(() => {

  const getData = async () => {
    const data = collection(db, "items");
    const col = await getDocs(data);
    const res = col.docs.map((doc) => doc={id:doc.id, ...doc.data()} );
    const arrayData = []
    res.forEach(element => {
      if (element.title == "Heineken" || element.title == "Imperial IPA" || element.title == "Patagonia Sendero Sur") {
        arrayData.push(element)
      }
    });
    return arrayData;
}

const task = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(getData())
    
  }, 1000);
})

task
  .then((resultado) => {
    setProductosHome(resultado)
  })
  .catch((err) => console.log(err))

return () => {
    
}
}, [])

// useEffect(() => {

//   const getColData = async () => {

//     try {
//       const data = collection(db, "items");z
//       const col = await getDocs(data);
//       const res = col.docs.map((doc) => doc={id:doc.id, ...doc.data()} );
//       console.log(res);
//     } catch (error) {
//       console.log(error);
//     }

//   }

//   getColData();

// return () => {
  
// }
// }, [])

  return (
    <div>
      {!params.id && <div className="logoMain">
            <div className='textoHeader'>
                <h1>{h1}</h1>
                <p>{p}</p>
                <input type="button" value="Tienda"/>
            </div>
            <img src={logo} alt="logo" />
        </div>}
        {params.id && <div className='nav'>
          <ul>
            <li><Link to={`/category/Quilmes`}>QUILMES</Link></li>
            <li><Link to={`/category/Patagonia`}>PATAGONIA</Link></li>
            <li><Link to={`/category/Imperial`}>IMPERIAL</Link></li>
            <li><Link to={`/category/Stella`}>STELLA ARTOIS</Link></li>
            <li><Link to={`/category/Brahama`}>BRAHAMA</Link></li>
            <li><Link to={`/category/Andes`}>ANDES</Link></li>
            <li><Link to={`/category/Temple`}>TEMPLE</Link></li>
          </ul>
        </div>}
        <div>
        {!params.id && <ItemList productos={productosHome}/>}
        {params.id && <ItemList productos={ProductosTienda}/>}
        {params.id == "all" && <ItemList productos={productos}/>}

        </div>
    </div>
  );
}

export default ItemListContainer;