import './App.css';
import logo from './components/logo.jpg';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';

function App() {
  return (
    <div>
      <NavBar key="Nav" logo={logo}/>
      <ItemListContainer key="ItemListContainer" logo={logo} h1="Tienda Kattegat" p="Encontra todos nuestros productos haciendo click"/>
    </div>
  );
}

export default App;
