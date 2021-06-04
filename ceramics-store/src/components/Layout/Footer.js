import '../Layout/Footer.css';


const Footer = props => {
    return (
        <div>
            <footer className="footer">
                <h3>Quick Links</h3>
                <ul>
                    <a href="/"><li>Home</li></a>
                    <a href="/about"><li>About</li></a>
                    <a href="/contact"><li>Home</li></a>
                </ul>
            </footer>
        </div>
    )
};

export default Footer;