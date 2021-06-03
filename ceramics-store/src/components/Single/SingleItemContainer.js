import './CartItem.css';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className='cart-item'>
      <div className="cart-image">{props.image}</div>
      <div>
        <h2>{props.name}</h2>
        <div className="cart-summary">
          <span className="cart-price">{price}</span>
          <span className="cart-amount">x {props.amount}</span>
        </div>
      </div>
      <div className="cart-actions">
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;