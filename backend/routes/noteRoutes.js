const express = require("express");
const { addNote, getNote } = require("../controllers/noteController");
const router = express.Router();
const { protect, staffOnly } = require("../middlewares/authMiddleware");

router.post("/:ticketId/note", protect, staffOnly, addNote);
router.get("/:ticketId/note", protect, staffOnly, getNote);

module.exports = router;
