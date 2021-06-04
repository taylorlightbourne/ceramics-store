import { Fragment } from 'react';
import { Link } from "react-router-dom";
import Background from '../../assets/Background2.jpg';
import '../Layout/AboutHeader.css';
import logo from '../../assets/logo.png';


const Header = props => {
    return (
        <Fragment>
            <header className="about-header">
                <div className="about-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="about-links">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </header>
            <div className="about-main-image">
                <img src={Background} alt="" />
            </div>
        </Fragment>
    )
};

export default Header;