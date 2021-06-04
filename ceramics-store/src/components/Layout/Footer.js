import '../Layout/Footer.css';


const Footer = (props) => {
    const linkStyle = {
        textDecoration: "none",
        color: 'black'
      };
    return (
        <div className="footer-style">
                <h3>Quick Links</h3>
                <ul>
                    <a href="/" style={linkStyle}><li>Home</li></a>
                    <a href="/about" style={linkStyle}><li>About</li></a>
                    <a href="/contact" style={linkStyle}><li>Contact</li></a>
                </ul>
        </div>
    )
};

export default Footer;
