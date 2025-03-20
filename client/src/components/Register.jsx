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
    //const backend = "http://localhost:5000";

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
    const [isLoading, setisLoading] = useState(false);
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
        // Simple email validation regex
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^[0-9]{10,}$/; 

    // Extract form data
    const { email, name, phone, college, transactionId, events } = formData.current;

    // Validation checks
    if (!email) {
        setMessage("Enter the Email");
        window.alert("Enter the Email");
         window.location.reload();
        return;
    } else if (!emailPattern.test(email)) {
        setMessage("Enter a valid Email address");
        window.alert("Enter a valid Email address");
         window.location.reload();
        return;
    }

    if (!name) {
        setMessage("Enter the Name");
        window.alert("Enter the Name");
         window.location.reload();
        return;
    }

    if (!phone) {
        setMessage("Enter the Phone number");
        window.alert("Enter the Phone number");
         window.location.reload();
        return;
    } else if (!phonePattern.test(phone)) {
        setMessage("Enter a valid Phone number (only digits, at least 10)");
        window.alert("Enter a valid Phone number (only digits, at least 10)");
         window.location.reload();
        return;
    }
    if (!college) {
        setMessage("Enter the College name");
        window.alert("Enter the College name");
         window.location.reload();
        return;
    }

    if (!transactionId) {
        setMessage("Enter the Transaction ID");
        window.alert("Enter the Transaction ID");
         window.location.reload();
        return;
    }

    if (!events || events.length === 0) {
        setMessage("Select at least one event");
        window.alert("Select at least one event");
         window.location.reload();
        return;
    }


      
        setisLoading(true);
            try {
                const response = await fetch(backend + "/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData.current),
                });

                const result = await response.json();
                 setisLoading(false);
                if (result.status === "success") {

                    setMessage(`Registration successful! Your ID: ${result.id}.After verification of the payment details,You will get the e-mail about confirmation of your registration.`);
                   
                    window.alert(`Registration successful! Your ID: ${result.id}.After verification of the payment details,You will get the e-mail about confirmation of your registration.`);
                    
                    window.location.reload();
                } else {
                    
                    window.alert(`Error: ${result.message}`);
                    window.location.reload();
                    setMessage(`Error: ${result.message}`);
                }
            } catch (error) {
                setisLoading(false);

                window.alert(`Error: ${error}`);
                window.location.reload();
                console.error("Error submitting form:", error);
                setMessage("An error occurred while submitting the form.");
            }
        
        
    };

    return (
        
        <div className="register-container">
            {/* Starry Background */}
    <div 
    class="loading" 
    style={{
        display: isLoading ? "flex" : "none",  // Use flex for centering
        position: "fixed",                     // Fixed to cover the whole page
        top: 0,
        left: 0,
        width: "100vw",                       // Full viewport width
        height: "100vh",                      // Full viewport height
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark semi-transparent background
        backdropFilter: "blur(5px)",          // Blurs background content
        alignItems: "center",                 // Center content vertically
        justifyContent: "center",             // Center content horizontally
        zIndex: 9999                          // Ensures it's above all other content
    }}
>
    <div style={{
        backgroundColor: "#fff",             // Loading box background
        padding: "20px 40px",
        borderRadius: "8px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
        fontWeight: "bold"
    }}>
        Loading...
    </div>
</div>
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
                    <Typography className="registerTitle input-field" variant={isMobile ? "h5" : "h4"} sx={{ textAlign: "center", color: "white", textShadow: "0 0 5px cyan", marginBottom: 3 , fontFamily: "Orbitron" }}>
                        On-Spot Registrations will open by tomorrow Morning 8 AM!
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
                                        "& fieldset": { border: "2px solid white", boxShadow: "0 0 13px cyan", borderRadius: "20px" }, 
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
                                        "& fieldset": { border: "2px solid white", boxShadow: "0 0 13px cyan", borderRadius: "20px" }, 
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
                                        "& fieldset": { border: "2px solid white", boxShadow: "0 0 13px cyan", borderRadius: "20px" }, 
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
                                        "& fieldset": { border: "2px solid white", boxShadow: "0 0 13px cyan", borderRadius: "20px" }, 
                                        "&:hover fieldset": { borderColor: "cyan" }, 
                                        "&.Mui-focused fieldset": { borderColor: "cyan" } 
                                    } 
                                }}
                            />
                        </Grid>



                        <Grid item xs={12} sm={5}>
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
                        </Grid> 

                        <Grid item xs={12} sm={5}>
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
                        </Grid> 
                        {/* <div class="check-box-flexbox">
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
                            </div> */}

                        {/* <div className="payment-div">
                            <img src={Upiscanner} alt="payment scanner" class="payment-img"></img>
                            <p style={{color:"white",textAlign:"center"}}>UPI_ID:srikanthbsa4@oksbi</p>
                        </div> */}
                        <Grid direction="column" sx={{ width:isMobile ? "80%" : "75%", marginTop:isMobile?"5%":"3%", bgcolor: "transparent", zIndex: 10 }}>
                            <Grid item xs={12} sm={12} sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                                <img src={Upiscanner} alt="payment scanner" class="payment-img"></img>
                                <p style={{color:"white",textAlign:"center",textShadow: "0 0 10px cyan"}}>UPI_ID:srikanthbsa4@oksbi</p>
                                <p style={{color:"white",textAlign:"center",textShadow: "0 0 10px cyan"}}>Register Amount : ₹250 per head</p>
                            </Grid>
                        </Grid>

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
                                        "& fieldset": { border: "2px solid white", boxShadow: "0 0 13px cyan", borderRadius: "20px" }, 
                                        "&:hover fieldset": { borderColor: "cyan" }, 
                                        "&.Mui-focused fieldset": { borderColor: "cyan" } 
                                    } 
                                }}
                            />
                            </Grid>
                           

                        
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
                                boxShadow: "0 0 13px cyan",
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