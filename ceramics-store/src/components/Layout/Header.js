import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import cheetahHomepage from '../../assets/cheetahHomepage.jpg';
import '../Layout/Header.css';
import logo from '../../assets/logo.png'


const Header = props => {
    return (
        <Fragment>
            <header className="header">
                <img src={logo} alt="" />
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className="main-image">
                <img src={cheetahHomepage} alt="" />
            </div>
        </Fragment>
    )
};

export default Header;