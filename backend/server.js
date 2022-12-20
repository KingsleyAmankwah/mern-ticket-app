const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const connectDB = require("./config/db");
const { errorHandler } = require("./middlewares/errorMiddleware");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const Port = process.env.PORT || 8000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/tickets", require("./routes/ticketRoutes"));
app.use("/api/notes", require("./routes/noteRoutes"));

app.use(errorHandler);

app.listen(Port, () => {
  connectDB();
  console.log(`Server is runnig on Port ${Port}`);
});
