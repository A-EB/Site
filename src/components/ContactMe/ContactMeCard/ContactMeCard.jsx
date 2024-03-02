import React from "react";
import "./ContactMeCard.css";
import Nav from "react-bootstrap/Nav";

const ContactMeCard = ({ url, iconUrl, text }) => {
    return (
        <div className="contact-details-card">
            <div className="icon">
                <Nav.Link href={url} target="_blank" >< img src={iconUrl} alt={text} /></Nav.Link>
            </div>

            <p>{text}</p>

        </div>
    )
}

export default ContactMeCard