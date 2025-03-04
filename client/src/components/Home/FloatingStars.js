import React from "react";
import "./stars.css";

const FloatingStars = () => {
  return (
    <div className="stars-container">
      {[...Array(50)].map((_, i) => (
        <div key={i} className="star"></div>
      ))}
    </div>
  );
};

export default FloatingStars;
