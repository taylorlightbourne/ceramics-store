import './ViewPopUpButton.css';



const ViewPopUpButton = (props) => {
    
    return (
        <button className="buttonView" onClick={props.onClick}>View</button>
    );
};

export default ViewPopUpButton;