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

const adminOnly = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.isAdmin === true) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an admin");
  }
});

module.exports = { protect, adminOnly };
