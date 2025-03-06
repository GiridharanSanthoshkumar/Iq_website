import React from "react";
import { motion } from "framer-motion";
import Astronaut from "./assets/astro1.png";
import UFOImage from "./assets/ufo.png"; // Add a UFO image
import "./About.css";
import saturn_image from "./assets/saturn_image.png";
import earth from "./assets/earth.png";
import neptune from "./assets/neptune.png";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const About = () => {
    const navigate = useNavigate();
    const numStars = 150; // Number of stars
    const stars = Array.from({ length: numStars });
    const screenWidth = window.innerWidth;
    const isMobile = screenWidth < 768;

    // Animation visibility tracking
    const { ref: planetsRef, inView: planetsInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true, threshold: 0.3 });
    const { ref: astronautRef, inView: astronautInView } = useInView({ triggerOnce: true, threshold: 0.5 });

    return (
        <div className="about-container" id="about">
            {/* Planets */}
            <motion.div 
                ref={planetsRef}
                className="planets"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: planetsInView ? 1 : 0, x: planetsInView ? 0 : -100 }}
                transition={{ duration: 1 }}
            >
                <img src={neptune} className="planet" alt="planet"></img>
                <img src={earth} className="planet" alt="planet"></img>
                <img src={saturn_image} className="planet" alt="planet"></img>
            </motion.div>

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

            {/* About Content */}
            <motion.div
                ref={contentRef}
                className="about-content"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: contentInView ? 1 : 0, y: contentInView ? 0 : 50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="title">
                   ABOUT <br />
                </h1>
                <p className="subtitle">
                 InfoQuest (IQ) is a national-level technical symposium by the CSE Department, challenging sharp minds to tackle complex problems, push their limits, and showcase their expertise through exciting events.
                </p>
                <motion.button 
                    className="register-button" 
                    
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: contentInView ? 1 : 0.8, opacity: contentInView ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <a href="/register" style={{textDecoration:"none",color:"black"}}>
                        REGISTER
                        </a>
                </motion.button>
            </motion.div>

            {/* Portal with Astronaut */}
            <motion.div
                ref={astronautRef}
                className="portal"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: astronautInView ? 1 : 0, y: astronautInView ? 0 : 50 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <img id="astroImage" src={Astronaut} alt="Astronaut" />
            </motion.div>
        </div>
    );
};

export default About;
