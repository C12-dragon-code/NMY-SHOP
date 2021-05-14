const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
// const ProductRouter = require("./src/routers/product.routes.js")
const AuthorRouter = require("./src/routers/auth.routers.js")

const OrderRouter = require("./src/routers/order.routes.js")
const ProductRouter = require("./src/routers/product.routers.js")
const UserRouter = require("./src/routers/user.routes.js")
const port = 3000;

app.use(express.static(__dirname + "/../client/dist"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// when the router is fixed use this ligne blow
// app.use("/api/NMYShop", ProductRouter);
app.use("/api/NMYShop", AuthorRouter);
app.use("/api/NMYShop", OrderRouter);
app.use("/api/NMYShop", ProductRouter);
app.use("/api/NMYShop", UserRouter);
app.listen(port, () => {
    console.log(`listening to the port http://localhost:${port}`);
});