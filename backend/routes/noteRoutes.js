const express = require("express");
const { addNote, getNote } = require("../controllers/noteController");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");

router.post("/:ticketId/note", protect, addNote);
router.get("/:ticketId/note", protect, getNote);

module.exports = router;
