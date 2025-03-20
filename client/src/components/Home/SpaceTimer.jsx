import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./SpaceTimer.css"; // Add styles

const SpaceTimer = () => {
  // Set your event date
  const targetDate = new Date("2025-03-20T20:00:00").getTime();

  // Timer state
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    return {
      days: Math.floor(0),
      hours: Math.floor(0),
      minutes: Math.floor(0),
      seconds: Math.floor(0),
    };
  }

  // Update the timer every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-timer">
      <motion.div 
        className="timer-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="timer-title">ONLINE REGISTRATIONS ARE CLOSED,SO ON-SPOT REGISTRATIONS WILL BE OPENED AT MARCH 21 8:30 AM </h2>
        <div className="timer">
          <motion.div 
            className="time-box"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <span className="time">{timeLeft.days}</span>
            <span className="label">Days</span>
          </motion.div>

          <motion.div 
            className="time-box"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.2 }}
          >
            <span className="time">{timeLeft.hours}</span>
            <span className="label">Hours</span>
          </motion.div>

          <motion.div 
            className="time-box"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.4 }}
          >
            <span className="time">{timeLeft.minutes}</span>
            <span className="label">Mins</span>
          </motion.div>

          <motion.div 
            className="time-box"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.6 }}
          >
            <span className="time">{timeLeft.seconds}</span>
            <span className="label">Secs</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SpaceTimer;
