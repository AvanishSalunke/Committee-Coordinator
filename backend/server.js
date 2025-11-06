const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config();

// --- Import our routes ---
const authRoutes = require('./routes/auth');
const transactionRoutes = require('./routes/transactions'); // <-- This will work now!

const app = express();

// --- Database Connection ---
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
connectDB();

// --- Middlewares ---
app.use(cors());
app.use(express.json());

// --- API Routes ---
app.use('/api/auth', authRoutes);
app.use('/api/transactions', transactionRoutes); // This will work now!

// --- Test Route ---
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the VJTI Fund Tracker API!' });
});

// --- Start the Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});