import { Fragment } from 'react';
import { NavLink } from "react-router-dom";
import Background from '../../assets/Background3.jpg';
import '../Layout/ContactHeader.css';
import logo from '../../assets/logo.png';


const Header = props => {
    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'black'
      };
    return (
        <Fragment>
            <header className="contact-header">
                <div className="contact-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="contact-links">
                    <ul>
                        <li><NavLink to="/" style={linkStyle}>Home</NavLink></li>
                        <li><NavLink to="/about" style={linkStyle}>About</NavLink></li>
                        <li><NavLink to="/contact" style={linkStyle}>Contact</NavLink></li>
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