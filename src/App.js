import './App.css';
import CartProvider from './context/CartContext';
import Rutas from './routes/rutas.jsx';

function App() {
  return (
    <div>
      <CartProvider>
        <Rutas/> 
      </CartProvider>
    </div>
  );
}

export default App;
