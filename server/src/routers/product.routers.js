// here we will use the controllers with the routers
const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/product-controllers.js")
// const verify = require("./verifyToken.js")
router.get("/products", ProductController.findAll);
module.exports = router;
