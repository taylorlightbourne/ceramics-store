import Header from '../components/Layout/AboutHeader';
import Footer from '../components/Layout/Footer';
import './About.css';
import profile from '../assets/aboutme.jpg';


function About() {


  return (
      <div>
        <div>
          <Header />
                <div className="about-info">
                    <img id="profile" src={profile} alt="Taylor"></img>
                    <h3>Taylor Lightbourne is the founder of Light Bourne Living.</h3>
                    <h3>For commissions or inquiries please contact info@LightBourneLiving.com.</h3>
                </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>

  );
}

export default About;
