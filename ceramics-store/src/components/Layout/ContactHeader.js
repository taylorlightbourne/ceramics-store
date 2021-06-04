import { Fragment } from 'react';
import { NavLink } from "react-router-dom";
import Background from '../../assets/Background3.jpg';
import '../Layout/ContactHeader.css';
import logo from '../../assets/logo.png';


const Header = props => {
    return (
        <Fragment>
            <header className="contact-header">
                <div className="contact-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="contact-links">
                    <ul>
                        <li><NavLink to="/" className="main-nav" activeClassName="main-nav-active">Home</NavLink></li>
                        <li><NavLink to="/about" className="main-nav" activeClassName="main-nav-active">About</NavLink></li>
                        <li><NavLink to="/contact" className="main-nav" activeClassName="main-nav-active">Contact</NavLink></li>
                    </ul>
                </div>
            </header>
            <div className="contact-main-image">
                <img src={Background} alt="" />
            </div>
        </Fragment>
    )
};

export default Header;