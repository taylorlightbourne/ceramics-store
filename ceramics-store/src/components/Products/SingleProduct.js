import React from 'react';
import { useSelector } from 'react-redux';
import { singleProduct } from '../../reducers/SingleProductReducer';
import PopUp from '../UI/PopUp';
import './SingleProduct.css';

export default function SingleProduct(props) {
    const selectedProduct = useSelector((state) => state.singleProduct);
    
    return (
        <PopUp onClose={props.onClose}>
        <div className="popup-contents">
            <div className="popup-image">
                <div>{selectedProduct.image} </div>
            </div>
            <div className="popup-info">
                <h2>{selectedProduct.name}</h2>
                <h3>Details: {selectedProduct.description}</h3>
                <h3>Price: ${selectedProduct.price.toFixed(2)}</h3>
            </div>  
        </div>
        </PopUp>
    );
}

