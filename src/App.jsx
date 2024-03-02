import React from 'react';
import Navbar from './components/NavBar/NavBar.jsx';
import Head from './components/Head/Head.jsx';
import Projects from './components/Projects/Projects.jsx';
import Experience from './components/Experience/Experience.jsx';
import ContactMe from './components/ContactMe/ContactMe.jsx';
import './App.css'
import Footer from './components/Footer/Footer.jsx';


const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Head />
        <Experience/>
        <Projects/>
        <ContactMe/>
      </div>
      <Footer/>
    </>
  );
};

export default App;
