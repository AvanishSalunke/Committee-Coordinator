// backend/server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();

const app = express();

// --- Middlewares ---
// 1. Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());
// 2. Enable Express to parse JSON data in request bodies
app.use(express.json());

// --- Basic Route ---
// A test route to make sure the server is working
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the VJTI Fund Tracker API!' });
});

// --- Start the Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});