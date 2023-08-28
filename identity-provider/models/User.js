const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  displayName: {
    type: String,
    trim: true,
    required: true,
  },
  profilePictureURL: {
    type: String,
    trim: true,
  },
  dob: {
    type: Date,
  },
  gender: {
    type: String,
    trim: true,
  },
  address: {
    type: {
      street: {
        type: String,
        trim: true,
      },
      city: {
        type: String,
        trim: true,
      },
      state: {
        type: String,
        trim: true,
      },
      country: {
        type: String,
        trim: true,
      },
      pincode: {
        type: String,
        trim: true,
      },
    },
  },
  phone: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
