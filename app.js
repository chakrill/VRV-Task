require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes'); // Declare `authRoutes` here
const userRoutes = require('./routes/userRoutes'); // Declare `userRoutes`

const app = express();

// Middleware
app.use(express.json());

// Connect to DB
connectDB();


// Routes
app.use('/auth', authRoutes); // Use the previously declared `authRoutes`
app.use('/users', userRoutes); // Add `userRoutes` if needed

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

console.log('DB_URI:', process.env.DB_URI);
