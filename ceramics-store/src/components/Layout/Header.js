import { Fragment } from 'react';
import { Link } from "react-router-dom";
import HeaderCartButton from './HeaderCartButton';
import cheetahHomepage from '../../assets/cheetahHomepage.jpg';
import '../Layout/Header.css';
import logo from '../../assets/logo.png';


const Header = props => {
    return (
        <Fragment>
            <header className="header">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="links">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="cartBtn">
                    <HeaderCartButton onClick={props.onShowCart}/>
                </div>
            </header>
            <div className="main-image">
                <img src={cheetahHomepage} alt="" />
            </div>
        </Fragment>
    )
};

export default Header;