const express = require("express");
const { addNote, getNote } = require("../controllers/noteController");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");

router.post("/:ticketId/notes", protect, addNote);
router.get("/:ticketId/notes", protect, getNote);

module.exports = router;
