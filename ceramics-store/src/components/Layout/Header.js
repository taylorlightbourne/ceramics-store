import { Fragment } from 'react';
import { NavLink } from "react-router-dom";
import HeaderCartButton from './HeaderCartButton';
import cheetahHomepage from '../../assets/Background1.jpg';
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
                        <li><NavLink to="/" className="main-nav" activeClassName="main-nav-active">Home</NavLink></li>
                        <li><NavLink to="/about" className="main-nav" activeClassName="main-nav-active">About</NavLink></li>
                        <li><NavLink to="/contact" className="main-nav" activeClassName="main-nav-active">Contact</NavLink></li>
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