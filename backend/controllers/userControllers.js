const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Register User" });
});
const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Login User" });
});
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "user details" });
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
