// send the dammy data to the data base
var mongoose = require("mongoose");
var newUser =require("../../user.json")
var newProduct = require('../../data.json')
const products= require("../src/models/product-model.js")
const users = require("../src/models/user-model.js")

mongoose.connect("mongodb+srv://nassir:nassir@cluster0.htrhr.mongodb.net/test");

var seedUser=(user)=>{
    users.insertMany(user,(err,res)=>{
        if (err){
            console.log(err);
        }
        console.log("the user has been added",res);
    })
};
seedUser(newUser)
var seedProduct=(product)=>{
    products.insertMany(product,(err,res)=>{
        if (err){
            console.log(err);
        }
        console.log("the product has been added",res);
    })
};
seedProduct(newProduct)