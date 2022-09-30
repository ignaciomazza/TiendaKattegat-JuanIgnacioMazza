import React from 'react'
import { Link } from "react-router-dom";

const Nosotros = (props) => {

  const {logo, h1, p} = props;

  return (
    <div className="logoMain">
        <div className='textoHeader'>
            <h1>{h1}</h1>
            <p>{p}</p>
            <Link to={`/category/all`}><input type="button" value="Tienda"/></Link>
        </div>
        <img src={logo} alt="logo" />
    </div>
  )
}

export default Nosotros