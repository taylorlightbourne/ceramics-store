import { Fragment } from 'react';
import { NavLink } from "react-router-dom";
import HeaderCartButton from './HeaderCartButton';
import cheetahHomepage from '../../assets/Background1.jpg';
import '../Layout/Header.css';
import logo from '../../assets/logo.png';



const Header = props => {
    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'black'
      };

    return (
        <Fragment>
            <header className="header">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="links">
                    <ul>
                        <li><NavLink to="/" style={linkStyle}>Home</NavLink></li>
                        <li><NavLink to="/about" style={linkStyle}>About</NavLink></li>
                        <li><NavLink to="/contact" style={linkStyle}>Contact</NavLink></li>
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