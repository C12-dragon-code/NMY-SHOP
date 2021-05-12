const mongoose = require("mongoose");
const db = require("../db/connection.js")
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

userSchema.pre('save', async function (next) {
  try{
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(this.password, salt)
    this.password = hashedPassword
    next()
  }catch(error){
    next(error);
  }
})


module.exports = mongoose.model("user", userSchema);
// var User = mongoose.model("user", userSchema)
// async function create(){const newUser = new User({
//   name: "nassir",
//   email: "nassir@gmail.com",
//   password: "password",
// });
// try {
//   const saveUser = await newUser.save();
//   console.log(saveUser);
//   // res.json(saveUser);
// } catch (error) {
//   console.log(error);
//   // res.json(error);
// }}
// create()