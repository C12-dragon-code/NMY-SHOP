const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");

const port = 3000;

app.use(express.static(path.join(__dirname, '..', 'client','dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => {
    console.log(`listening to the port http://localhost:${port}`);
});