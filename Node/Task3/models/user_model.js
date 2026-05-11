const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Please enter a valid email"
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6
    },
  token : {
    type: String,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  },
    profilePic: {
        type: String,
        default: "uploads\profile.webp"
    }
});

module.exports = mongoose.model('User', userSchema);