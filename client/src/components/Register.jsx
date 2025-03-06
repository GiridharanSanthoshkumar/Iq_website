import { useState, useMemo,useCallback,useRef } from "react";
import { motion } from "framer-motion";
import { TextField, Button, Grid, Paper, Typography, Stack, Select, MenuItem } from "@mui/material";
import "./Register.css";
import Upiscanner from "./assets/payment-scanner.jpeg";


const Register = () => {
    const numStars = 200;
    const stars = Array.from({ length: numStars }).map(() => ({
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2
}));

    const screenWidth = window.innerWidth;
    const isMobile = screenWidth < 768;
    const backend = "https://iq-website-zeta.vercel.app";


    //const [rerender, setRerender] = useState("no");
    // State for form fields
   const formData = useRef({
        name: "",
        email: "",
        phone: "",
       college: "",
        transactionId:"",
        events:[]
    });
    const [message, setMessage] = useState("");
    const eventsList1 = [ "Code Unravel",
  "Byte the Bug",
  "Shadow code",
  "Presentix",
  "WebXpert",
        "Techtonic Quiz"
    ];
     const eventsList2 = ["Hunt 'n' Seek","Type Racer","Music Mania","Techmime"];
    const handleChange = (e) => {
        formData.current[e.target.name] = e.target.value;

    };
    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        
        if (checked) {
            // Add event to array if checked
            formData.current.events.push(value);
        } else {
            // Remove event from array if unchecked
            formData.current.events = formData.current.events.filter(event => event !== value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
          
        console.log(formData.current);


      
      
        try {
            const response = await fetch(backend+"/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData.current),
            });

            const result = await response.json();
            if (result.status === "success") {
                setMessage(`Registration successful! Your ID: ${result.id}.After verification of the payment details,You will get the e-mail about confirmation your registration.`);
                window.alert(`Registration successful! Your ID: ${result.id}.After verification of the payment details,You will get the e-mail about confirmation your registration.`);
               window.location.reload();
            } else {
                window.alert(`Error: ${result.message}`);
                 window.location.reload();
                setMessage(`Error: ${result.message}`);
            }
        } catch (error) {
            window.alert(`Error: ${error}`);
             window.location.reload();
            console.error("Error submitting form:", error);
            setMessage("An error occurred while submitting the form.");
        }
        
    };

    return (
        <div className="register-container">
            {/* Starry Background */}
            <div className="stars">
                {stars.map((star, index) => (
                    <motion.div
                        key={index}
                        className="star"
                        style={{
                            width: star.size,
                            height: star.size,
                            top: `${star.y}%`,
                            left: `${star.x}%`,
                        }}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "mirror",
                            delay: star.delay,
                        }}
                    />
                ))}
            </div>


            {/* Rocket Animation */}
            <motion.div 
                className="rocket"
                animate={{
                    x: isMobile ? [0, 1000] : [50,1500],
                    y: isMobile ? [0, -1500] : [0,-1500],
                    scale: [1.5, 2],
                }}
                transition={{
                    duration: 7,  
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{ position: "absolute",display:"none" }}
            >
                <div className="fire"></div> 🚀
            </motion.div>

            {/* Register Form */}
            <Stack direction="column" sx={{ width:isMobile ? "80%" : "75%", margin: "0 auto", bgcolor: "transparent", zIndex: 10 }}>
                <Paper elevation={5} sx={{ padding: 4, bgcolor: "transparent", borderRadius: 10, boxShadow: "0 0 18px cyan", border: "3px solid white" }}>
                    <Typography className="registerTitle input-field" variant={isMobile ? "h5" : "h4"} sx={{ textAlign: "center", color: "white", textShadow: "0 0 5px cyan", marginBottom: 3 , fontFamily: "Orbitron" }}>
                        Mission to IQ 🚀
                    </Typography>

                    {/* Form Fields */}
                    <Grid container spacing={2} columnGap={10} rowGap={isMobile ? 2 : 8} style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: "2%" }}>
                        <Grid item xs={12} sm={5}>
                            <TextField 
                                fullWidth
                              className="input-field"
                                label="Name"
                                
                                name="name" 
                                variant="outlined" 
                                value={formData.name} 
                                onChange={handleChange} 
                                InputProps={{ style: { color: "white" } }}
                                sx={{ 
                                    zIndex: 10, 
                                    input: { color: "white" ,fontFamily: "Orbitron"}, 
                                    label: { color: "white",fontFamily: "Orbitron" },
                                    "& .MuiOutlinedInput-root": { 
                                        "& fieldset": { border: "2px solid white", boxShadow: "0 0 10px cyan", borderRadius: "20px" }, 
                                        "&:hover fieldset": { borderColor: "cyan" }, 
                                        "&.Mui-focused fieldset": { borderColor: "cyan" } 
                                    } 
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <TextField 
                                fullWidth 
                              className="input-field"
                                label="Email" 
                                name="email" 
                                variant="outlined" 
                                value={formData.email} 
                                onChange={handleChange} 
                                InputProps={{ style: { color: "white",fontFamily: "Orbitron" } }}
                                sx={{ 
                                    zIndex: 10, 
                                    input: { color: "white" ,fontFamily: "Orbitron"}, 
                                    label: { color: "white",fontFamily: "Orbitron" }, 
                                    "& .MuiOutlinedInput-root": { 
                                        "& fieldset": { border: "2px solid white", boxShadow: "0 0 10px cyan", borderRadius: "20px" }, 
                                        "&:hover fieldset": { borderColor: "cyan" }, 
                                        "&.Mui-focused fieldset": { borderColor: "cyan" } 
                                    } 
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <TextField 
                                fullWidth 
                                className="input-field"
                                label="Phone" 
                                name="phone" 
                                variant="outlined" 
                                value={formData.phone} 
                                onChange={handleChange} 
                                InputProps={{ style: { color: "white" } }}
                                sx={{ 
                                    zIndex: 10, 
                                   input: { color: "white" ,fontFamily: "Orbitron"}, 
                                    label: { color: "white",fontFamily: "Orbitron" },
                                    "& .MuiOutlinedInput-root": { 
                                        "& fieldset": { border: "2px solid white", boxShadow: "0 0 10px cyan", borderRadius: "20px" }, 
                                        "&:hover fieldset": { borderColor: "cyan" }, 
                                        "&.Mui-focused fieldset": { borderColor: "cyan" } 
                                    } 
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <TextField 
                                fullWidth 
                                className="input-field"
                                label="College" 
                                name="college" 
                                variant="outlined" 
                                value={formData.college} 
                                onChange={handleChange} 
                                InputProps={{ style: { color: "white" } }}
                                sx={{ 
                                    zIndex: 10, 
                                   input: { color: "white" ,fontFamily: "Orbitron"}, 
                                    label: { color: "white",fontFamily: "Orbitron" },
                                    "& .MuiOutlinedInput-root": { 
                                        "& fieldset": { border: "2px solid white", boxShadow: "0 0 10px cyan", borderRadius: "20px" }, 
                                        "&:hover fieldset": { borderColor: "cyan" }, 
                                        "&.Mui-focused fieldset": { borderColor: "cyan" } 
                                    } 
                                }}
                            />
                        </Grid>

                        {/* Event Selection Dropdown
                        <Grid item xs={12} sm={5}>
                            <Select
                                fullWidth
                                name="event"
                                value={formData.event}
                                onChange={handleChange}
                                displayEmpty
                                sx={{
                                    color: "white",
                                    border: "2px solid white",
                                    boxShadow: "0 0 10px cyan",
                                    borderRadius: "20px",
                                    "& .MuiSvgIcon-root": { color: "white" },
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": { border: "2px solid white" },
                                        "&:hover fieldset": { borderColor: "cyan" },
                                        "&.Mui-focused fieldset": { borderColor: "cyan" }
                                    }
                                }}
                            >
                                <MenuItem value="" disabled>Select an Event</MenuItem>
                                <MenuItem value="Coding Contest">Coding Contest</MenuItem>
                                <MenuItem value="Hackathon">Hackathon</MenuItem>
                                <MenuItem value="Tech Quiz">Tech Quiz</MenuItem>
                                <MenuItem value="AI Workshop">AI Workshop</MenuItem>
                                <MenuItem value="Robotics Competition">Robotics Competition</MenuItem>
                                <MenuItem value="Blockchain Seminar">Blockchain Seminar</MenuItem>
                            </Select>
                        </Grid>
                         */}
                        <div class="check-box-flexbox">
                       <fieldset class="check-boxx1">
                <legend>Select Tech Events</legend>
                {eventsList1.map((event, index) => (
                    <label key={index}>
                        <input
                            type="checkbox"
                            value={event}
                            onChange={handleCheckboxChange}
                        />
                        {event}
                    </label>
                ))}
                        </fieldset>
                        
                         <fieldset class="check-boxx2">
                <legend>Select Non-Tech Events</legend>
                {eventsList2.map((event, index) => (
                    <label key={index}>
                        <input
                            type="checkbox"
                            value={event}
                            onChange={handleCheckboxChange}
                        />
                        {event}
                    </label>
                ))}
                            </fieldset>
                            </div>

                        <div className="payment-div">
                            <img src={Upiscanner} alt="payment scanner" class="payment-img"></img>
                            <p style={{color:"white",textAlign:"center"}}>UPI_ID:srikanthbsa4@oksbi</p>
                        </div>

                        <div className="transId">
                        <Grid item xs={12} sm={5}>
                            <TextField 
                                fullWidth 
                                className="input-field"
                                label="UPI Transaction ID" 
                                name="transactionId" 
                                variant="outlined" 
                                value={formData.transactionId} 
                                onChange={handleChange} 
                                InputProps={{ style: { color: "white" } }}
                                sx={{ 
                                    zIndex: 10, 
                                   input: { color: "white" ,fontFamily: "Orbitron"}, 
                                    label: { color: "white",fontFamily: "Orbitron" },
                                    "& .MuiOutlinedInput-root": { 
                                        "& fieldset": { border: "2px solid white", boxShadow: "0 0 10px cyan", borderRadius: "20px" }, 
                                        "&:hover fieldset": { borderColor: "cyan" }, 
                                        "&.Mui-focused fieldset": { borderColor: "cyan" } 
                                    } 
                                }}
                            />
                            </Grid>
                            </div>
                           

                        
                    </Grid>


                    {/* Submit Button */}
                    <Stack direction="row" justifyContent="center" sx={{ marginTop: 3 }}>
                        <Button 
                            variant="contained" 
                            sx={{
                                fontFamily:"Orbitron",
                                background: "transparent",
                                border: "2px solid white",
                                color: "white",
                                padding: "10px 20px",
                                fontSize: "1.2rem",
                                borderRadius: "20px",
                                boxShadow: "0 0 10px cyan",
                                transition: "0.3s ease-in-out",
                                "&:hover": { background: "cyan", color: "black", boxShadow: "0 0 20px cyan" },
                            }}
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </Stack>
                </Paper>
            </Stack>
        </div>
    );
};

export default Register;
