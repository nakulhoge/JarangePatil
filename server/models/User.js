const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  mobile: {
    type: String,
    required: true,
    match: /^[6-9]{1}[0-9]{9}$/,
  },
  gender: {
    type: String,
    enum: ['पुरुष', 'स्त्री', 'इतर'],
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  taluka: {
    type: String,
    required: true,
  },
  village: {
    type: String,
    required: true,
  },
});

// Create the model
const User = mongoose.model('User', userSchema);

module.exports = User;
