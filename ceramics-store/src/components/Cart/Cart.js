import './Cart.css';
import Modal from '../UI/Modal';

const Cart = props => {
    const cartItems = <ul className="cart-items">{[
        {id:'11', 
        name:'sushi', 
        amount: 2, 
        price: 12.99
    },].map((merchandise) => <li>{merchandise.name}</li>)}</ul>;

  return (
    <Modal onClose={props.onClose}>
        {cartItems}
        <div className="total">
            <span>Total Amount</span>
            <span>35.62</span>
        </div>
        <div className="actions">
            <button className="closeButton" onClick={props.onClose}>Close</button>
            <button className="button">Order</button>
        </div>
    </Modal>
  );
};

export default Cart;