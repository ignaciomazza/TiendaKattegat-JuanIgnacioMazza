import './NavBar.css';
import cart from './../bx-cart.svg';
import CartWidget from './../Cart/CartWidget.jsx';

const NavBar = (props) => {
  const {logo} = props;

  return (
    <nav>
        <div className='logo'>
            <img src={logo} alt="logo" />
        </div>
        <ul>
            <li><a href="#">INICIO</a></li>
            <li><a href="#">TIENDA</a></li>
            <li><a href="#">NOSTROS</a></li>
        </ul>
        <CartWidget key="Cart" cart={cart}/>
    </nav>
  );
}

export default NavBar;