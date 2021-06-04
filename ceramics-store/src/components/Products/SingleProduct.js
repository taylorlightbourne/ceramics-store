// import PopUp from '../UI/PopUp';
// import './SingleProduct.css';

// const SingleProduct = (props) => {
//     const singleProductItem = [{id:'01', name:'mug', price:12.99, description: 'blank', image:'url'}].map((item) => <h2>{item.name}</h2>);

//     return (
//         <PopUp onClose={props.onClose}>
//         {singleProductItem}
//         <div>
//             <div className="singleProduct-info">
//                 <div className="singleProduct-image">
//                     <span>Image:</span>
//                     <span>"url"</span>
//                 </div>
//                 <div className="singleProduct-name">
//                     <span>Name:</span>
//                     <span>Mug</span>
//                 </div>
//                 <div className="singleProduct-price">
//                     <span>Price:</span>
//                     <span>12.99</span>
//                 </div>
//                 <div className="singleProduct-description">
//                     <span>Info:</span>
//                     <span>blah blah blah</span>
//                 </div>
//             </div>
//             <div className="actions">
//                     <button className="buttonClose" onClick={props.onClose}>Close</button>
//                     <button className="buttonAdd">Add to Cart</button>
//             </div>
//         </div>
//         </PopUp>

//     );
// };

// export default SingleProduct

import React from 'react';
import { useSelector } from 'react-redux';
import { singleProduct } from './SingleProductReducer';
import PopUp from '../UI/PopUp';
import './SingleProduct.css';

export default function SingleProduct(props) {
    const selectedProduct = useSelector((state) => state.singleProduct);
    
    return (
        <PopUp onClose={props.onClose}>
        <div>
            <h2>{selectedProduct.name}</h2>
            <div>{selectedProduct.image} </div>
            <h3>Size: {selectedProduct.description}</h3>
            <h3>Price: ${selectedProduct.price.toFixed(2)}</h3>
        </div>
        </PopUp>
    );
}

