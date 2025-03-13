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
        {/*<div className="venue-info">
          <h2>Venue & Timing</h2>
          <p>Planetarium X, 7:00 PM - 11:00 PM</p>
        </div>
        */}
        <div className="contact-info">
          <h2>Contact</h2>
          {event.contact.map((c) => <p style={{ display: "block" }} >{c}</p>)}
        </div>
        <div className="contact-info" style={{display:"flex",alignItems:"center"}}>
          <h2>Prize Pool : </h2>
          <p style={{ display: "block" ,marginLeft:"2%"}}>{event.prize}</p>
        </div>

        <div className="contact-info" style={{display:"flex",alignItems:"center",marginTop:"-2%"}}>
          <h2>Rulebook : </h2>
          <a href="https://drive.google.com/file/d/1fbfbgcN3QLTzS0J-rkf4SAaVTawl_WoZ/view?usp=drivesdk" style={{
            padding: "10px 20px",
            color: "cyan",
            fontSize: "16px",
            fontWeight: "bold",
            textDecoration: "none",
            transition: "background 0.3s ease-in-out, transform 0.2s",
        
          }}>Link to Rulebook</a>
        </div>
      </div>
    </div> 
  );
};

export default EventPage;
