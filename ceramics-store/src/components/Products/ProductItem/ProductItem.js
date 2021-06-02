import './ProductItem.css';

const ProductItem = props => {
    const price = `$${props.price.toFixed(2)}`;

    return (
    <li className="product">
        <div>
            <h3>{props.name}</h3>
            <div className="description">{props.description}</div>
            <div className="price">{price}</div>
        </div>
    </li>
    )};

export default ProductItem;