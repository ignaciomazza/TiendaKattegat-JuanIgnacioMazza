import './App.css';
import Rutas from './routes/rutas.jsx';
import { GlobalContext } from './context/CartContext';

function App() {
  return (
    <div>
      <GlobalContext>
        <Rutas/>  
      </GlobalContext>
    </div>
  );
}

export default App;
