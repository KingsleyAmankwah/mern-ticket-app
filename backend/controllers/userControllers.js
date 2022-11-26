const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, password2 } = req.body;

  //Empty Input Validation
  if (!name || !email || !password || !password2) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  //Find if user already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  //Password validation
  if (password !== password2) {
    res.status(400);
    throw new Error("The two passwords do not match");
  }

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
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
