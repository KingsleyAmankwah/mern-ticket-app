const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const connectDB = require("./config/db");
const Port = process.env.PORT || 8000;

connectDB();

const app = express();

app.listen(Port, () => console.log(`Server started on Port ${Port}`));
