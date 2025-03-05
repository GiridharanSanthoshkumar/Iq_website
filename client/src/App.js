import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Home from "./components/Home";
import HomePageComps from "./components/HomePageComps";
import EventPage from "./components/EventPage";
import EventDetails from "./EventDetails";
import Register from "./components/Register";
import "./App.css";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePageComps />} />
        
        {
          EventDetails.map((eventt) =>
          { return <Route path={"/" + eventt.name} element={<EventPage event={eventt}></EventPage>} /> }
          )
        }
        <Route path="/register" element={<Register></Register>} />
              
            
            
            
          
      
       
       
      </Routes>
    </Router>
  );
};

export default App;