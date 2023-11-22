const mongoose = require("mongoose")

const signinSchema = new mongoose.Schema({
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    ConfirmPassword:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('creaters',signinSchema)  //creators is a mongodb collection name and signinSchema is the models name