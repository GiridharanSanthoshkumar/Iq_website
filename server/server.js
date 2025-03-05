import express from "express";
import cors from "cors";
import { google } from "googleapis";
import { readFile } from "fs/promises";
import dotenv from "dotenv";

// Initialize Express app
const app = express();
const PORT = 5000;
dotenv.config();
// Middleware
app.use(cors()); // Allows frontend to communicate with backend
app.use(express.json()); // Parses JSON body requests

// Load Google API credentials
//const keys = JSON.parse(await readFile("./gcp.json", "utf8"));

const client = new google.auth.JWT(
  process.env.CLIENT_EMAIL,
  null,
  process.env.PRIVATE_KEY,
  ["https://www.googleapis.com/auth/spreadsheets"]
);

const sheets = google.sheets({ version: "v4", auth: client });

// Function to get the next available row ID
async function getNextId() {
  try {
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: "1oplYJrkOrmwWcMc2q25WB5bq2M_1ShoAHzFZwAC65Ws",
      range: "Sheet1!A:A", // Fetch entire column A (IDs)
    });

    const values = res.data.values || [];
    console.log("Values : ",values)
    return values.length + 1; // Next available row (assuming row 1 is a header)
  } catch (error) {
    console.error("Error getting next ID:", error);
    return null;
  }
}


// Function to write data to Google Sheets
async function writeData(name, email, phone, college,transactionId,event) {
  try {
    const nextId = await getNextId();
    if (nextId === null) {
      throw new Error("Failed to retrieve next ID.");
    }

    const uniqueId = `REG${String(nextId).padStart(4, "0")}`; // ID Format: REG0001, REG0002, etc.

    await sheets.spreadsheets.values.append({
      spreadsheetId: "1CJkUv8y5bqY_gYdmD99mv73E4sfrmsTfdKzDEJk_axc",
      range: "Sheet1!A:G", // Append to the sheet without specifying a row
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS", // Ensures new rows are added
      requestBody: { values: [[uniqueId, name, email, phone, college,transactionId,event]] }, // ✅ Use function parameters
    });

    console.log("Data written successfully! : ",uniqueId);
    return { status: "success", message: "Data written successfully",id:uniqueId };
  } catch (error) {
    console.error("Error writing data:", error);
    return { status: "error", message: "Failed to write data", error: error.message };
  }
}


// POST route to handle form submission from frontend
app.post("/register", async (req, res) => {
  const { name, email,phone,college,transactionId,events } = req.body;

  if (!name || !events || !phone) {    
    return res.status(400).json({ status: "error", message: "All fields are required!" });
  }
  let event = "";
  for (let i = 0; i < events.length; i++)
  {
    if (i == 0)
    {
      event = events[i];
    }
    else {
      event = event + "," + events[i];
    }
   
  }

  const response = await writeData( name, email,phone,college,transactionId,event);
  res.json(response);
});

app.get("/", (req, res) => {
  res.json({ message: "hello from backend" })
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});