import PopUpContext from './PopUpContext';

const PopUpProvider = props => {
    const viewItemInPopUpHandler = id => {};

    const PopUpContext = {
        item: [],
        viewItem: viewItemInPopUpHandler,
    }
    return <PopUpContext.Provider value={PopUpContext}>
        {props.children}
    </PopUpContext.Provider>
};

export default PopUpProvider;