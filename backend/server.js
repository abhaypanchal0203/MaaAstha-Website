const express = require('express');
const mongoose = require('mongoose'); // Database se connect karne wala tool
const cors = require('cors');
require('dotenv').config(); // .env file se secrets padhne ke liye

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB Connection ka Jadoo
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Database ekdum jhakkaas Connect Ho Gaya Bhai! 🎉'))
  .catch((error) => console.log('❌ MongoDB Connection Error:', error));

// Test Route
app.get('/', (req, res) => {
  res.send('Bhai, Maa Astha NGO ka Backend ekdum mast chal raha hai! 🚀');
});

// Port Setup
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port: ${PORT}`);
});