import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
    return (
        <div className="contact-form-content">
            <form name="form" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="form" />
                <div className="name-container">
                    <input type="text" name="firstname" placeholder="First Name" />
                    <input type="text" name="lastname" placeholder="Last Name" />
                </div>
                
                <input type="text" name="email" placeholder="Email"/>
                <textarea type="text" name="message" placeholder="Message" />

                <button>SEND</button>
            </form>
        </div>
    )
}

export default ContactForm