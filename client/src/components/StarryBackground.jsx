import React, { useEffect, useState } from "react";
import "./EventDisplay.css";

const StarryBackground = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const starCount = 100; // Adjust the number of stars
        let tempStars = [];

        for (let i = 0; i < starCount; i++) {
            tempStars.push({
                id: i,
                left: Math.random() * window.innerWidth,  // Random X position
                top: Math.random() * window.innerHeight, // Random Y position
                animationDuration: `${Math.random() * 3 + 2}s`, // Varying twinkle speed
            });
        }

        setStars(tempStars);
    }, []);

    return (
        <div>
            {stars.map(star => (
                <div 
                    key={star.id}
                    className="star"
                    style={{
                        left: star.left,
                        top: star.top,
                        animationDuration: star.animationDuration,
                    }}
                ></div>
            ))}
        </div>
    );
};

export default StarryBackground;
