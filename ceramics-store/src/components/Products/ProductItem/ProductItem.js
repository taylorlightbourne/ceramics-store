import { useContext } from 'react';
import './ProductItem.css';
import ProductItemForm from './ProductItemForm';
import CartContext from '../../../store/cart-context';
import ViewButton from '../../Layout/ViewPopUpButton';
import { selectProduct } from '../../../store/SingleProductAction';
import { useDispatch } from 'react-redux';

const ProductItem = (props) => {
    const dispatch = useDispatch();

    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
            image: props.image,
        });
    };
    
    return (
    <li className="product">
        <div className="productContainer">
            <div>
                <div className="image">{props.image}</div>
            </div>
            <div>
                <h3>{props.name}</h3>
                <div className="description">{props.description}</div>
                <div className="price">{price}</div>
                <ViewButton onClick={() => selectProduct(dispatch, props)} />
            </div>
        </div>
        <div>
            <ProductItemForm onAddToCart={addToCartHandler} />
        </div>
    </li>
    )};

export default ProductItem;