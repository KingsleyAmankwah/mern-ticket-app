const jwt = require("jsonwebtoken");

const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token = req.cookies.token;

  if (!token) {
    res.status(401);
    throw new Error("Not authorzied, no token");
  }

  //verify token
  const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);

  // Get user id from token
  const user = await User.findById(verifiedToken.id).select("-password");

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  req.user = user;
  next();
});

module.exports = { protect };
