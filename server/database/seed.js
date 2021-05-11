// send the dammy data to the data base
var mongoose = require("mongoose");
var newUser =require("../../user.json")
const users = require("../src/models/user-model.js")

mongoose.connect("mongodb://localhost/NMYShop");

var seedUser=(user)=>{
    users.insertMany(user,(err,res)=>{
        if (err){
            console.log(err);
        }
        console.log("the user has been added",res);
    })
};
seedUser(newUser)