const express = require("express");
const router = express.Router();
const Authcontroller =require("../controllers/auth.controllers.js")
router.post("/createUser",Authcontroller.createOne)
module.exports = router;
