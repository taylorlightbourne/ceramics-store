import '../Layout/ContactForm.css';


const ContactForm = () => {
    return (
        <div class="screen-body">
            <div class="screen-body-item left">
                <div class="app-title">
                    <span>CONTACT US</span>
                </div>
                <div class="app-contact">
                    CONTACT INFO : +62 81 314 928 5954
                    INFO@LIGHTBOURNELIVING.COM
                </div>
            </div>
            <div class="screen-body-item">
                <div class="app-form">
                    <div class="app-form-group">
                        <input class="app-form-control" placeholder="NAME"></input>
                    </div>
                    <div class="app-form-group">
                        <input class="app-form-control" placeholder="EMAIL"></input>
                    </div>
                    <div class="app-form-group">
                        <input class="app-form-control" placeholder="PHONE NUMBER"></input>
                    </div>
                    <div class="app-form-group message">
                        <input class="app-form-control" placeholder="MESSAGE"></input>
                    </div>
                    <div class="app-form-group buttons">
                        <button class="app-form-button">CANCEL</button>
                        <button class="app-form-button">SEND</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;

