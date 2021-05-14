// In this file we will have the schema for the product
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  url: String,
  name: String,
  description: String,
  prices: String,
  stock:Number,
});

module.exports = mongoose.model("product", productSchema);
