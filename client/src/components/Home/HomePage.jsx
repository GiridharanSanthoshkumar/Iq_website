import React from "react";
import { motion } from "framer-motion";
import "./HomePage.css";
import astronaut from "../assets/astronaut.png";

//import earth from "./background.png";
import SpaceTimer from "./SpaceTimer"; 
import FloatingStars from "./FloatingStars";
import { useNavigate } from "react-router-dom";
//import Navbar from "./Navbar";


const HomePage = () => {

  const navigate = useNavigate();

  return (
    <div className="homepage" id="home">
      <FloatingStars></FloatingStars>
      {//<SatelliteAnimation></SatelliteAnimation>
      }
      
        <motion.nav
          className="navbar"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}>
    
          <ul>
            <motion.li
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
          >Home</motion.li>
            <motion.li
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          onClick={() => document.getElementById("events")?.scrollIntoView({ behavior: "smooth" })}>Events</motion.li>
            <motion.li
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          onClick={()=>navigate("/register")}>Register</motion.li>
            <motion.li
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Contact</motion.li>
          </ul>
      
        </motion.nav>
      
      {// <Navbar></Navbar>
      }
       
        <div className="content">
             <motion.h1
          className="title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        >
          INFOQUEST`25
        </motion.h1>
       
       
        {/* Text Animation */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Code the Cosmos
        </motion.p>
       
              <motion.div
              initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}> 
        <motion.img
          src={astronaut}
          alt="Astronaut"
          className="astronaut"
          animate={{ y: [0, -10, 0, 10, 0], x: [0, 5, -5, 5, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  />
                 </motion.div>  


                 

             

              
               {/* Space Timer Animation */}
              <motion.div
                  style={{display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%"
 }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
        >
          <SpaceTimer />
        </motion.div>
              
          </div>
          
           
            
    </div>
  );
};

export default HomePage;
