import './NavBar.css';
import cart from './../bx-cart.svg';
import CartWidget from './../Cart/CartWidget.jsx';
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const {logo} = props;

  return (
    <nav>
        <div className='logo'>
            <img src={logo} alt="logo" />
        </div>
        <ul>
            <li><Link to={`/`}>INICIO</Link></li>
            <li><Link to={`/category/all`}>TIENDA</Link></li>
            <li><a href="#">NOSTROS</a></li>
        </ul>
        <CartWidget key="Cart" cart={cart}/>
    </nav>
  );
}

export default NavBar;