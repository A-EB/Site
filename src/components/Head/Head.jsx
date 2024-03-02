import React from 'react'
import './Head.css'
import Typist from "react-typist";
import "react-typist/dist/Typist.css";



const Head = () => { 
        return (
            <div id="home">
            <section className="head-container">
                <div  className="head-content">
                    <Typist avgTypingDelay={120}>
                        <span className="intro-title">
                        {"Hey i'm, "} 
                        <span className="intro-name">{"Ali."}</span>
                        </span>
                    </Typist>
                        <div>
                        I'm a 19-year-old Moroccan 2nd year <b>computer science</b> student at <b>Sorbonne</b> in Paris. 
                        Embracing challenges, enjoying diverse perspectives, and soaking up the cultural richness of the city.
                        </div>
                </div>

                <div className='head-img'>
                    <div>
                        <div className='tech-icon'>
                            <img src="./assets/images/icon06.png" alt="" />
                        </div>
                        <img src="./assets/images/img1.png" alt="" />
                    </div>

                    <div>
                        
                        <div className='tech-icon'>
                            <img src="./assets/images/icon05.png" alt="" />
                        </div>
                        <div className='tech-icon'>
                            <img src="./assets/images/icon03.png" alt="" />
                        </div>
                        <div className='tech-icon'>
                            <img src="./assets/images/icon04.png" alt="" />
                        </div>
                        <div className='tech-icon'>
                            <img src="./assets/images/icon02.png" alt="" />
                        </div>
                    </div>
                </div> 
            </section>
            </div>
        );
};

export default Head