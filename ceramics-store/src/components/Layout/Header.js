import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import cheetahHomepage from '../../assets/cheetahHomepage.jpg';
import '../Layout/Header.css';


const Header = props => {
    return (
        <Fragment>
            <header className="header">
                <h1>Custom Mugs</h1>
                <HeaderCartButton />
            </header>
            <div className="main-image">
                <img src={cheetahHomepage} alt="" />
            </div>
        </Fragment>
    )
};

export default Header;