const express = require("express");
const { addNote, getNote } = require("../controllers/noteController");
const router = express.Router();
const { protect, adminOnly } = require("../middlewares/authMiddleware");

router.post("/:ticketId/note", protect, adminOnly, addNote);
router.get("/:ticketId/note", protect, getNote);

module.exports = router;
