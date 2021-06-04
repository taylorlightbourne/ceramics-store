export const selectProduct = ( dispatch, product ) => {
    product.onClick(true)
    console.log(product)
    return dispatch({
        type: "SET_SELECTED_PRODUCT",
        payload: product,
    });
};