
import Header from '../components/Layout/ContactHeader';
import Footer from '../components/Layout/Footer';
import './Contact.css';
import ContactForm from '../components/Layout/ContactForm';



function Contact() {

  return (
    <div>
          <Header />
            <main className="contact-contents">
                <ContactForm />
            </main>
          <Footer />
      </div>
  );
}

export default Contact;