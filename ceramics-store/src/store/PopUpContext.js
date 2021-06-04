import React from 'react';

const PopUpContext = React.createContext({
    viewItem: (id) => {}
});

export default PopUpContext;