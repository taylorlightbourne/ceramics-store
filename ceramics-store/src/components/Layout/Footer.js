import { Fragment } from 'react';
import '../Layout/Footer.css';


const Footer = props => {
    return (
        <Fragment>
            <footer className="footer">
                <h3>Quick Links</h3>
                <ul>
                    <a href="/"><li>Home</li></a>
                    <a href="/about"><li>About</li></a>
                    <a href="/contact"><li>Home</li></a>
                </ul>
            </footer>
        </Fragment>
    )
};

export default Footer;