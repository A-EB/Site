import React, { useRef } from "react";
import './Projects.css';
import ProjectCard from "./ProjectCard/ProjectCard";
import { PROJECTS } from "../../utils/data";
import Slider from "react-slick";

const Projects = () => {
        const sliderRef = useRef();

        const settings = {
            dots:false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows:false,
            responsive: [
                {
                    breakpoint:769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };

        const sliderRight = () => {
            sliderRef.current.slickNext();
        };
        const sliderLeft = () => {
            sliderRef.current.slickPrev();
        };

    
    return (
        <div id="projects">
            <span></span>
            <div className="section-header "></div>
            <section className="project-container">
            <h3>Projects</h3>

            <div  className="project-content">

                <div className="arrow-right" onClick={sliderRight}>
                    <span class="material-symbols-outlined">chevron_right</span>
                </div>
                <div className="arrow-left" onClick={sliderLeft}>
                    <span class="material-symbols-outlined">chevron_left</span>
                </div>

                <Slider ref={sliderRef} {...settings}>
                    {PROJECTS.map((item) => (
                        <ProjectCard key={item.title} details={item}/>
                    ))}
                </Slider>
            </div>
        </section>
        </div>
    )
}

export default Projects