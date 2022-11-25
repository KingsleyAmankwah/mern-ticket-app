const express = require("express");
const dotenv = require("dotenv").config();

const Port = process.env.PORT || 8000;

const app = express();

app.listen(Port, () => console.log(`Server started on Port ${Port}`));
