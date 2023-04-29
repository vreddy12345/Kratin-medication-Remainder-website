const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3000;

let medications = [];

app.use(express.json());
app.use(cors());

// Get all medications
app.get("/medications", (req, res) => {
  res.json(medications);
});

// Add a new medication
app.post("/medications", (req, res) => {
  const newMedication = req.body;
  medications.push(newMedication);
  res.json(newMedication);
});

// Define a route for the root URL
app.get("/", (req, res) => {
  res.send("Welcome to the Medication Reminder App!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
