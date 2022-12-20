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

router.post("/", createTicket);
router.get("/", getTickets);
router.get("/:id", getTicket);
router.put("/:id", updateTicket);
router.delete("/:id", deleteTicket);

module.exports = router;
