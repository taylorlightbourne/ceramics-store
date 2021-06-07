import { Fragment } from 'react';
import ProductSummary from './ProductSummary';
import AvailableProducts from './AvailableProducts';




const Products = (props) => {
    return (
        <Fragment>
            <ProductSummary />
            <AvailableProducts onClick={props.onShowPopUp} />
        </Fragment>
    )
};

export default Products;