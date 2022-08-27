import './Item.css';

function Item(props) {

    const {id, title, price, pictureUrl, stock} = props;
  
    return (
      <div className='containerProducto'>
        <img src={pictureUrl} alt=""/>
        <div className='comprar'>
            <h5>{title}</h5>
            <p>{price}</p>
            <input type="button" value="Ver detalles de producto"/>
            <p className='stock'>Stock disponible: {stock}</p>
        </div>
    </div>
    );
  }
  
  export default Item;