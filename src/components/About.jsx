import React from "react";
import { motion } from "framer-motion";
import Astronaut from "./assets/astro1.png";
import UFOImage from "./assets/ufo.png"; // Add a UFO image
import "./About.css";
import saturn_image from "./assets/saturn_image.png";
import earth from "./assets/earth.png";
import neptune from "./assets/neptune.png";
const About = () => {
    const numStars = 150; // Number of stars
    const stars = Array.from({ length: numStars });
    const screenWidth = window.innerWidth;
    const isMobile = screenWidth < 768;

    return (
        <div className="about-container">
            {/* Planets */}
            <div className="planets">
                
                <img src={neptune} className="planet" alt="planet"></img>
                 <img src={earth} className="planet" alt="planet"></img>
                <img src={saturn_image} className="planet" alt="planet"></img>
            </div>

            {/* Starry Background */}
            <div className="stars">
                {stars.map((_, index) => {
                    const size = Math.random() * 3 + 0.5;
                    const x = Math.random() * 100;
                    const y = Math.random() * 100;
                    const delay = Math.random() * 2;

                    return (
                        <motion.div
                            key={index}
                            className="star"
                            style={{
                                width: size,
                                height: size,
                                top: `${y}%`,
                                left: `${x}%`,
                            }}
                            animate={{
                                opacity: [0.3, 1, 0.3],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "mirror",
                                delay: delay,
                            }}
                        />
                    );
                })}
            </div>

            {/* UFO Animation */}
           

            <div className="about-content">
                <h1 className="title">
                   ABOUT <br />
                    
                </h1>
                <p className="subtitle">
                  InfoQuest (IQ), is a prestigious national-level intercollegiate technical symposium organized by the CSEA at GCT. This flagship event serves as a platform for students to demonstrate their technical expertise, problem-solving abilities, and creativity through a series of challenging competitions, fostering innovation and excellence in computer science.
                </p>
                <button className="register-button">REGISTER</button>
            </div>

            {/* Portal with Astronaut */}
            <div className="portal">
                <img id="astroImage" src={Astronaut} alt="Astronaut" />
            </div>
        </div>
    );
};

export default About;
