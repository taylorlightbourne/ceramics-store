import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import '../Layout/HeaderCartButton.css';
import 'font-awesome/css/font-awesome.min.css';


const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
        }, 0);

    return (
        <button className="button" onClick={props.onClick}>
            <span className="icon">
                <i className="fa fa-shopping-cart"></i>
            </span>
            <span>Your Cart</span>
            <span className="badge">
                {numberOfCartItems}
            </span>
        </button>
    );
};

export default HeaderCartButton;