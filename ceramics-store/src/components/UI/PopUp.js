import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './PopUp.css';

const Backdrop = props => {
    return (
    <div className="backdrop" onClick={props.onClose} />
    );
};

const PopUpOverlay = props => {
    return (
    <div className="popup">
        <div className="singleItem-Content">{props.children}</div>
    </div>
    );
};

const portalElement = document.getElementById('overlays');

const PopUp = props => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
        {ReactDOM.createPortal(<PopUpOverlay>{props.children}</PopUpOverlay>, portalElement)}
    </Fragment>
};

export default PopUp;