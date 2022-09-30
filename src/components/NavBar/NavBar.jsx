import './NavBar.css';
import cart from './../bx-cart.svg';
import CartWidget from '../Cart/CartWidget.jsx';
import { Link } from "react-router-dom";
import React, { useState, useContext } from 'react';

const NavBar = (props) => {
  const {menu, logo} = props;

  const [estado, setEstado] = useState(false);

  function aparecerMenu (valor) {
    if (valor){
      setEstado(false);
    }else{
      setEstado(true);
    }
  }

  return (
    <nav>
        <div className='logo'>
            <Link to={`/`}><img src={logo} alt="logo" /></Link>
        </div>
        <ul>
            <li><Link to={`/`}>INICIO</Link></li>
            <li><Link to={`/category/all`}>TIENDA</Link></li>
            <li><Link to={`/nosotros`}>NOSOTROS</Link></li>
        </ul>
        <CartWidget key="Cart" cart={cart}/>
        <div className="btn-menu" onClick={() => aparecerMenu(estado)}>
          <img src={menu} alt="logo"/>
        </div>
        {estado == true && <div className='container-menu'><ul className='menu'><li><Link to={`/`}>INICIO</Link></li><li><Link to={`/category/all`}>TIENDA</Link></li><li><Link to={`/nosotros`}>NOSOTROS</Link></li></ul></div>}
        
    </nav>
  );
}

export default NavBar;