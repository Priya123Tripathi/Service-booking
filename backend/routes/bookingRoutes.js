import express from "express";
import auth from "../middleware/authMiddleware.js";
import admin from "../middleware/adminMiddleware.js";
import {
  createBooking,
  getMyBookings,
  getBooking,
  cancelBooking,
  getAllBookings,
updateBookingStatus
} from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", auth, createBooking);

router.get("/my", auth, getMyBookings);

router.get("/:id", auth, getBooking);

router.put("/:id/cancel", auth, cancelBooking);
router.get("/", auth, admin, getAllBookings);

router.put("/:id/status", auth, admin, updateBookingStatus);

export default router;