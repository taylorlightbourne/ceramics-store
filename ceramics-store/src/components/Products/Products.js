import { Fragment } from 'react';
import ProductSummary from './ProductSummary';
import AvailableProducts from './AvailableProducts';
import ViewButton from '../Layout/ViewPopUpButton';




const Products = (props) => {
    return (
        <Fragment>
            <ProductSummary />
            <AvailableProducts />
            <ViewButton onClick={props.onShowPopUp}/>
        </Fragment>
    )
};

export default Products;