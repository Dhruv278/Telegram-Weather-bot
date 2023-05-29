const mongoose = require('mongoose');

// Create a user schema
const adminSchema = new mongoose.Schema({
    token:{
        type:String,
        required:true
    },
    changedAt:{
        type:Date,
    },
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

   


});

// Create a user model using the schema
const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;