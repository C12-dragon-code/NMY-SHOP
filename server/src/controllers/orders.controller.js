var mongoose = require("mongoose");
// const UserModel = require("../database/userModel.js");
// const ProductModel = require("../database/productModel.js");
// const bcrypt = require("bcrypt");
// const { signupValidation, loginValidation } = require("../auth");
// const jwt = require("jsonwebtoken");
const OrderModel= require("../models/order-models.js")
// const OrderModel= require("../database/order.js")
module.exports.createOrder = async function (req, res) {
    console.log(req.body)
    try {
      const order = await OrderModel.create(req.body);
      res.send(order);
    } catch (err) {
      res.send(err);
    }
  };
  module.exports.findAllOrders = async function (req, res) {
    try {
      const order = await OrderModel.find({});
      res.send(order);
    } catch (error) {
      res.send(error);
    }
  };
  module.exports.deleteOrder = async function (req, res) {
    console.log(req.params._id);
    try {
      const order = await OrderModel.findByIdAndDelete({
        _id: req.params.id,
      });
      res.send(order);
    } catch (err) {
      res.send(err);
    }
  };
  module.exports.cOrder = async function (req, res) {
    console.log(req.body)
    try {
      const order = await OrderModel.create(req.body);
      res.send(order);
    } catch (err) {
      res.send(err);
    }
  };