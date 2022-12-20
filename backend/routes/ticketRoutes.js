const express = require("express");
const {
  createTicket,
  getTicket,
  updateTicket,
  deleteTicket,
  getTickets,
} = require("../controllers/ticketController");
const router = express.Router();

const { protect } = require("../middlewares/authMiddleware");

// // Re-route into note router
// const noteRouter = require("./noteRoutes");
// router.use("/:ticketId/notes", noteRouter);

router.post("/", protect, createTicket);
router.get("/", protect, getTickets);
router.get("/:id", protect, getTicket);
router.put("/:id", protect, updateTicket);
router.delete("/:id", protect, deleteTicket);

module.exports = router;
