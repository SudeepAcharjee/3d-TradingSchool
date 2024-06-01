import React from 'react';

const ContactForm = ({ ids }) => {
    return (
        <div id={ids}>
            <div id="contact-form-container" className="column contact-container">
                <div id="contact-name-input" className="input-container column">
                    <div className="row">
                        <label htmlFor="contact-name-input-field">Name :</label>
                        <span className="error-label hide">Please enter your name.</span>
                    </div>
                    <input id="contact-name-input-field" tabIndex="-1" />
                </div>
                <div id="contact-email-input" className="input-container column">
                    <div className="row">
                        <label htmlFor="contact-email-input-field">Email :</label>
                        <span className="error-label hide">Please enter a valid email address.</span>
                    </div>
                    <input id="contact-email-input-field" type="email" tabIndex="-1" />
                </div>
                <div id="contact-phone-input" className="input-container column">
                    <div className="row">
                        <label htmlFor="contact-phone-input-field">Phone number :</label>
                        <span className="error-label hide">Please enter a valid phone number.</span>
                    </div>
                    <input id="contact-phone-input-field" type="number" tabIndex="-1" />
                </div>
                <div id="contact-message-input" className="input-container column">
                    <div className="row">
                        <label htmlFor="contact-message-input-field">Message :</label>
                        <span className="error-label hide">Please enter your message.</span>
                    </div>
                    <textarea id="contact-message-input-field" tabIndex="-1"></textarea>
                </div>
                <div className="column" id="contact-button-container">
                    <div>
                        <div id="contact-submit-button" className="small-button orange-hover">
                            Submit
                        </div>
                    </div>
                </div>
            </div>

        </div>
      
    );
};

export default ContactForm;
