const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

// @desc    Register a new user
// @route   /api/users/
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  //Empty Input Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  //Find if user already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
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
    //Generate token
    const token = generateToken(user._id);

    //Send http only token
    res.cookie("accessToken", token, {
      path: "/",
      httpOnly: true,
      // expires: new Date(Date.now() + 1000 * 86400), //1day
    });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Authenticate user
// @route   /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //Empty Input validation
  if (!email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  //Check for user email
  const user = await User.findOne({ email });

  if (!user) {
    res.status(404);
    throw new Error("User not found, please signup");
  }

  const passwordIsCorrect = await bcrypt.compare(password, user.password);

  if (!passwordIsCorrect) {
    res.status(400);
    throw new Error("Invalid email or password");
  }

  //Generate token
  const token = generateToken(user._id);

  //Send http only token
  res.cookie("accessToken", token, {
    path: "/",
    httpOnly: true,
    // expires: new Date(Date.now() + 1000 * 86400), //1day
  });

  //Check user and passwords match
  if (user && passwordIsCorrect) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token,
    });
  } else {
    res.status(401);
    throw new Error("Invalid credentials");
  }
  res.status(200).json({ message: "Login User" });
});

//Logout User
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("token", "", {
    path: "/",
    httpOnly: true,
    expires: new Date(0),
  });

  return res.status(200).json({ message: "Logout successful" });
});

// @desc    Get current user
// @route   /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getMe,
};
