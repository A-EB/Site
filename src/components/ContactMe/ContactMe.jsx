import React from "react";
import "./ContactMe.css"
import ContactMeCard from "./ContactMeCard/ContactMeCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
    return (
        <div>
            <section id="contact" className="contact-container">
                <h5>Contact Me</h5>
                <div className="contact-content">
                    <div style={{ flex: 1}}>
                        <ContactMeCard
                            url="mailto:alielboukili75@gmail.com"
                            iconUrl="./assets/images/email-icon.png"
                            text="Mail"
                        />
                        <ContactMeCard
                            url="https://github.com/A-EB"
                            iconUrl="./assets/images/github-icon.png"
                            text="Github"
                        />
                        <ContactMeCard
                            url="https://www.linkedin.com/in/ali-el-boukili-396566272/"
                            iconUrl="./assets/images/Linkedin-icon.png"
                            text="Linkedin"
                        />
                    </div>
                    <div style={{ flex: 1}}>
                        <ContactForm />

                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactMe