import React from "react";
import "./EventPage.css";

import myVideo from "./assets/UFO_animate.mp4"; // Adjust the path




const EventPage = ({ event }) => {
  return ( 
    <div className="event_container">
          <div className="nebula"></div>
          <div className="UFOvideo">
      <video width="800" height="450" autoPlay loop muted style={{width:"100vw"}}>
        <source src={myVideo} type="video/mp4" />
        
      </video>
    </div>
          
      

      <div className="event_content">
        <h1 className="glowing-title">{event.name}</h1>
        <div className="glass-card">
          <h2>Description</h2>
          <p>
            {event.description}
            
          </p>
        </div>
        <div className="rules-section">
          <h2>Rules & Guidelines</h2>
          <ul>
            {event.rules.map((rule) => {
              return <li>{rule}</li>
            })}
            
          </ul>
        </div>
        <div className="venue-info">
          <h2>Venue & Timing</h2>
          <p>Planetarium X, 7:00 PM - 11:00 PM</p>
        </div>
        <div className="contact-info">
          <h2>Contact</h2>
          {event.contact.map((c) => <p style={{ display: "block" }} >{c}</p>)}
        </div>
      </div>
    </div>
  );
};

export default EventPage;
