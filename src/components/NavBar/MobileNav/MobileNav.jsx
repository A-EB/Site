import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu}) => {
    return (
        <>
            <div 
            className={`mobile-menu ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
            >
                <div className="mobile-menu-container">
                <img className="logo-img" src="./assets/images/logo.png" alt="" />
                    <ul>
                        <li>
                            <a className="menu-item">Home</a>
                        </li>

                        <li>
                            <a className="menu-item">Experience</a>
                        </li>

                        <li>
                            <a className="menu-item">Projects</a>
                        </li>

                        <li>
                            <a className="menu-item">Contact Me</a>
                        </li>

                        <button className="contact-btn" onClick={() => {
                            const link = document.createElement('a');
                            link.href = "/utils"; 
                            link.download = "CV.pdf"; 
                            link.click();}}>Get CV
                        </button>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MobileNav