import '../Layout/AboutForm.css';
import profile from'../../assets/aboutme.jpg';

const AboutForm = () => {
    return (
        <div className="about-body">
            <img id="profile" src={profile} alt="Taylor"></img>
            <h3>Taylor Lightbourne is the founder of Light Bourne Living.</h3>
            <h3>For commissions or inquiries please contact info@LightBourneLiving.com.</h3>
        </div>
    );
};

export default AboutForm;

