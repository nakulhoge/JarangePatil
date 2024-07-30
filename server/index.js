require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors'); // Ensure you have cors installed
const User = require('./models/User');
const connectDb = require('./utils/db');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Handle form submissions
app.post('/submit-form', async (req, res) => {
    const { fname, lname, email, number, gender, city, taluka,village } = req.body;
  
    try {
      const newUser = new User({
        firstName: fname,
        lastName: lname,
        email,
        mobile: number,
        gender,
        city,
        taluka,
        village
      });
  
      // Save the user to the database
      await newUser.save();
      res.status(201).send('Thanks For Submit For Ek Maratha Ek Koti Maratha')
    } catch (error) {
      console.error('Error saving form data:', error);
      res.status(500).send('Server Error');
    }
  });

const port = process.env.PORT || 3000;

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server is running at Port: ${port}`);
  });
});
