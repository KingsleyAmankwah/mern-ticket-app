const express = require("express");
const {
  createTicket,
  getTicket,
  getTicket,
  updateTicket,
  deleteTicket,
  getTickets,
} = require("../controllers/ticketController");
const router = express.Router();

const { protect } = require("../middlewares/authMiddleware");

router.post("/", protect, createTicket);
router.get("/", protect, getTickets);
router.get("/:id", protect, getTicket);
router.put("/:id", protect, updateTicket);
router.delete("/:id", protect, deleteTicket);

module.exports = router;
