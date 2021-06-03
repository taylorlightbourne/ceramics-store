import './ProductItem.css';
import ProductItemForm from './ProductItemForm';

const ProductItem = props => {
    const price = `$${props.price.toFixed(2)}`;

    return (
    <li className="product">
        <div>
            <h3>{props.name}</h3>
            <div className="description">{props.description}</div>
            <div className="price">{price}</div>
        </div>
        <div>
            <ProductItemForm id={props.id} />
        </div>
    </li>
    )};

export default ProductItem;