const express = require("express");
const {
  registerUser,
  loginUser,
  getMe,
  getUsers,
} = require("../controllers/userControllers");

const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);
// router.get("/", protect, staffOnly, getUsers);
router.get("/me", protect, getMe);

module.exports = router;
