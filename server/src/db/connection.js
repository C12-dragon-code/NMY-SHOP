const mongoose = require("mongoose");

   mongoose.connect("mongodb+srv://nassir:nassir@cluster0.htrhr.mongodb.net/test", { useNewUrlParser: true,useUnifiedTopology: true }) ;



const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("db connected");
});

module.exports = db;
