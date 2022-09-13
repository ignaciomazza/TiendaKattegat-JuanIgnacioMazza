const CartWidget = (props) => {

  const {cart} = props;

  return (
    <div className='cart'>
        <img src={cart} alt="cart" />
    </div>
  );
}

export default CartWidget;