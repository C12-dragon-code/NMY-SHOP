// In this file we will have the schema for the product
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    email: String,
  url: String,
  name: String,
  description: String,
  prices: String,
  stock:Number,
});

module.exports = mongoose.model("order", OrderSchema);
