import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import '../Layout/HeaderCartButton.css';
import 'font-awesome/css/font-awesome.min.css';


const HeaderCartButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    
    const { items } = cartCtx;

    const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
        }, 0);

    
    const btnClasses = `${"button"} ${btnIsHighlighted ? "bump" : ''}`;

    useEffect(() => {
        if(items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);
        
        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
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