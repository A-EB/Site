import React, { useState } from "react";
import "./NavBar.css";
import MobileNav from "./MobileNav/MobileNav";


const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo-img" src="./assets/images/logo.png" alt="" />
          {/*<a className="name">Ali El Boukili</a>*/}
          <ul>
            <li>
              <a href="#home" className="menu-item">Home</a>
            </li>
            <li>
              <a href="#experience" className="menu-item">Experience</a>
            </li>
            <li>
              <a href="#projects" className="menu-item">Projects</a>
            </li>
            <li>
              <a href="#contact" className="menu-item">Contact Me</a>
            </li>
            <button className="contact-btn" onClick={() => {
              const link = document.createElement('a');
              link.href = "/utils"; 
              link.download = "CV.pdf"; 
              link.click();}}>Get CV
            </button>
          </ul>

            <button class="menu-btn" onClick={toggleMenu}>
              <span 
                class={"material-symbols-outlined"}
                style={{ fontSize: "1.8rem" }}
              >
                {openMenu ? "close" : "menu"}
              </span>
            </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;