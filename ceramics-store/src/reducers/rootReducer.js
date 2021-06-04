import { combineReducers } from "redux";
import singleProduct from './SingleProductReducer';
// Import your reducers and put them inside of here so you have access to the store.
const rootReducer = combineReducers({ singleProduct });

export default rootReducer;
