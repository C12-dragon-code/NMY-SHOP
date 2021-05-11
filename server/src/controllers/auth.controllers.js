const { signupValidation, loginValidation } = require("../../auth.js")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user-model.js")
module.exports.createOne = async (req, res) => {
    //VALIDATE THE DATA
    const { error } = signupValidation(req.body);
    if (error) return res.send(error.details[0].message);
  
    //CHECK IF THE USER IS ALREADY IN THE DATABASE
    const emailExist = await UserModel.findOne({ email: req.body.email });
    if (emailExist) return res.send("Email already exists");
  
    //CRATE A NEW USER
    const newUser = new UserModel({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    try {
      const saveUser = await newUser.save();
      res.json(saveUser);
    } catch (error) {
      res.json(error);
    }
  };