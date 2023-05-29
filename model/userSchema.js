const mongoose = require('mongoose');

// Create a user schema
const userSchema = new mongoose.Schema({
    first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
    unique: true,
  },
  status:{
    type:String,
    default:'Active',
    required:true,
  },
  userId:{
    type:String,
    unique:true,
    required:true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a user model using the schema
const User = mongoose.model('User', userSchema);

module.exports = User;