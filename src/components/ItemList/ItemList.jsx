import Item from './../Item/Item.jsx';
import './ItemList.css';

function ItemList(props) {

  const {productos} = props;

  return (
    <div className='container-productos'>
        <h2>Tienda</h2>
        <h3>Mas vendidos</h3>
        <div className='productos'>
            {productos.map((item, index) => (
                <Item key={index} {...item}/>
            ))}
        </div>
        <input type="button" value="Ir a tienda" className='ir'/>
    </div>
  );
}

export default ItemList;