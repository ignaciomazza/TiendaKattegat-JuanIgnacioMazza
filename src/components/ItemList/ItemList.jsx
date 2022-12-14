import Item from './../Item/Item.jsx';
import './ItemList.css';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

function ItemList(props) {

  const params = useParams();

  const {productos} = props;

  return (
    <div className='container-productos'>
        {!params.id && <h2>Tienda</h2> }
        {!params.id && <h3>Mas vendidos</h3> }
        <div className='productos'>
            {productos.map((item, index) => (
                <Item key={index} {...item}/>
            ))}
        </div>
        {!params.id && <Link to={`/category/all`}><input type="button" value="Ir a tienda" className='ir'/></Link>}
    </div>
  );
}

export default ItemList;