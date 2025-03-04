import { useState, useMemo,useCallback,useRef } from "react";
import { motion } from "framer-motion";
import { TextField, Button, Grid, Paper, Typography, Stack, Select, MenuItem } from "@mui/material";
import "./Register.css";


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

    // State for form fields
   const formData = useRef({
        name: "",
        email: "",
        phone: "",
        college: "",
        event: ""
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        formData.current[e.target.name] = e.target.value;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData.current),
            });

            const result = await response.json();
            if (result.status === "success") {
                setMessage(`Registration successful! Your ID: ${result.id}.After verification of the payment details,You will get the e-mail about confirmation your registration.`);
                window.alert(message);
                formData.name = "";
                formData.email = "";
                formData.phone = "";
                formData.college = "";
                formData.event = "";
            } else {
                setMessage(`Error: ${result.message}`);
            }
        } catch (error) {
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
                style={{ position: "absolute" }}
            >
                <div className="fire"></div> 🚀
            </motion.div>

            {/* Register Form */}
            <Stack direction="column" sx={{ width:isMobile ? "80%" : "75%", margin: "0 auto", bgcolor: "transparent", zIndex: 10 }}>
                <Paper elevation={5} sx={{ padding: 4, bgcolor: "transparent", borderRadius: 10, boxShadow: "0 0 18px cyan", border: "3px solid white" }}>
                    <Typography className="registerTitle" variant={isMobile ? "h5" : "h4"} sx={{ textAlign: "center", color: "white", textShadow: "0 0 5px cyan", marginBottom: 3 ,fontFamily:"Times New Roman"}}>
                        Mission to IQ 🚀
                    </Typography>

                    {/* Form Fields */}
                    <Grid container spacing={2} columnGap={10} rowGap={isMobile ? 2 : 8} style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: "2%" }}>
                        <Grid item xs={12} sm={5}>
                            <TextField 
                                fullWidth 
                                label="Name" 
                                name="name" 
                                variant="outlined" 
                                value={formData.name} 
                                onChange={handleChange} 
                                InputProps={{ style: { color: "white" } }}
                                sx={{ 
                                    zIndex: 10, 
                                    input: { color: "white" }, 
                                    label: { color: "white" }, 
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
                                label="Email" 
                                name="email" 
                                variant="outlined" 
                                value={formData.email} 
                                onChange={handleChange} 
                                InputProps={{ style: { color: "white" } }}
                                sx={{ 
                                    zIndex: 10, 
                                    input: { color: "white" }, 
                                    label: { color: "white" }, 
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
                                label="Phone" 
                                name="phone" 
                                variant="outlined" 
                                value={formData.phone} 
                                onChange={handleChange} 
                                InputProps={{ style: { color: "white" } }}
                                sx={{ 
                                    zIndex: 10, 
                                    input: { color: "white" }, 
                                    label: { color: "white" }, 
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
                                label="College" 
                                name="college" 
                                variant="outlined" 
                                value={formData.college} 
                                onChange={handleChange} 
                                InputProps={{ style: { color: "white" } }}
                                sx={{ 
                                    zIndex: 10, 
                                    input: { color: "white" }, 
                                    label: { color: "white" }, 
                                    "& .MuiOutlinedInput-root": { 
                                        "& fieldset": { border: "2px solid white", boxShadow: "0 0 10px cyan", borderRadius: "20px" }, 
                                        "&:hover fieldset": { borderColor: "cyan" }, 
                                        "&.Mui-focused fieldset": { borderColor: "cyan" } 
                                    } 
                                }}
                            />
                        </Grid>

                        {/* Event Selection Dropdown */}
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

                        <Grid item xs={12} sm={5}>
                            <TextField 
                                fullWidth 
                                label="College" 
                                name="college" 
                                variant="outlined" 
                                value={formData.college} 
                                onChange={handleChange} 
                                InputProps={{ style: { color: "white" } }}
                                sx={{ 
                                    zIndex: 10, 
                                    input: { color: "white" }, 
                                    label: { color: "white" }, 
                                    "& .MuiOutlinedInput-root": { 
                                        "& fieldset": { border: "2px solid white", boxShadow: "0 0 10px cyan", borderRadius: "20px" }, 
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
