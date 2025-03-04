import { motion } from "framer-motion";
import React from "react";
import "./stars.css";
import saturn from "./saturn.png";
const SatelliteAnimation = () => {
  return (
    <motion.img
      src={saturn} // Replace with your satellite/rocket image
      alt="Satellite"
      className="satellite"
      initial={{ x: -100, y: 50, rotate: 0 }}
      animate={{ x: "100vw", y: 20, rotate: 360 }}
      transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
    />
  );
};

export default SatelliteAnimation;
