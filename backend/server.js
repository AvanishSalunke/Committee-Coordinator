const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose'); // Import Mongoose

// Load environment variables from .env file
dotenv.config();

// --- Import our new auth routes ---
const authRoutes = require('./routes/auth');

const app = express();

// --- Database Connection ---
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit process with failure
  }
};
connectDB(); // Run the connection function
// -------------------------

// --- Middlewares ---
app.use(cors());
app.use(express.json());

// --- API Routes ---
// This tells the server:
// For any URL starting with "/api/auth", use the 'authRoutes' file.
app.use('/api/auth', authRoutes);

// --- Test Route ---
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the VJTI Fund Tracker API!' });
});

// --- Start the Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});