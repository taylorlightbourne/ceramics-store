import '../Layout/HeaderCartButton.css';
import 'font-awesome/css/font-awesome.min.css';


const HeaderCartButton = props => {
    return <button className="button">
        <span className="icon">
            <i className="fa fa-shopping-cart"></i>
        </span>
        <span>Your Cart</span>
        <span className="badge">
            3
        </span>
    </button>
};

export default HeaderCartButton;