import moonImage from "./assets/Halfmoon.png";
import astronautImage from "./assets/astro1.png";
import leftImg from "./assets/leftside.png";
import "./nontech.css";
import StarryBackground from "./StarryBackground";
import { useNavigate } from "react-router-dom";


const events1 = [
  {
    title: "Hunt 'n' Seek",
    
    description:
      "Get ready for an adrenaline-packed adventure! Teams will navigate through a series of clues, crack puzzles, and complete challenges to uncover the hidden treasure. This event is all about strategy, teamwork, and quick thinking—only the sharpest minds will make it to the finish line!",
  },
  {
    title: "Type Racer",
   
    description:
      "Ready, set, type! This event is all about speed and precision—participants will compete to type a given passage as fast and accurately as possible. Every keystroke counts, and the fastest fingers with the fewest mistakes will claim victory.",
  },
  
];
const events2 = [{
  title: "Music Mania",
  
  description:
    "Are you the ultimate music buff? Test your knowledge as you listen to short snippets of songs and race against the clock to identify the song title, artist, and movie. Whether you're a chart-topping expert or just love a good tune, this challenge will keep you on your toes!",
},
{
  title: "Tech Mime",
 
  description:
    "A high-energy game of charades—tech edition! Participants will act out technology-related terms, gadgets, or concepts while their team races against the clock to guess correctly. No words, no sounds—just gestures, creativity, and a lot of laughter!",
    }];

const Nontech = () => {
  const navigate = useNavigate();
  return <div className="nontechContainer">
   
      <StarryBackground></StarryBackground>
      
      
        
      {/* Left Side - Moon & Astronaut */}
      <div className="left-side">
      {

      /*<img src={moonImage} alt="Moon" className="moon" />
        <img src={astronautImage} alt="Astronaut" className="astro1" />
        */
        <img src={leftImg} alt="Moon" className="moon"></img>

      }
      </div>

    {/*  Right Side - Event Boxes  */}
    
      <div className="right-side">
        <h2 className="right-title">NON TECHNICAL EVENTS</h2>
        <div className="event-boxes">
        <div className="first_col">

           
        {events1.map((event, index) => (
        <div key={index} className="event-box">
        <h3 style={{color:"white"}}>{event.title}</h3>
        
        <p className="evnt-desc">{event.description}</p>
            <button className="nontechbtn" onClick={() => { navigate("/" + event.title) }}>Read More</button>
        </div>
          ))}
              
            </div>
             <div className="second_col">
               {events2.map((event, index) => (
            <div key={index} className="event-box">
              <h3 style={{color:"white"}}>{event.title}</h3>
             
              <p className="evnt-desc">{event.description}</p>
                   <button className="nontechbtn" onClick={() => { navigate("/" + event.title) }}>Read More</button>
            </div>
          ))}
           </div>

            
           
        </div>
      </div>
    

      </div>
}

export default Nontech;