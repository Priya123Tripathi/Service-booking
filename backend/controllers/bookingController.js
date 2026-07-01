import Booking from "../models/Booking.js";

// Create Booking
export const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create({
      ...req.body,
      user: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Booking Created",
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get My Bookings
export const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({
      user: req.user.id,
    }).populate("service");

    res.status(200).json({
      success: true,
      bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Booking by ID
export const getBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate("service")
      .populate("user", "-password");

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking Not Found",
      });
    }

    res.status(200).json({
      success: true,
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Cancel Booking
export const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: "Cancelled" },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Booking Cancelled",
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllBookings = async (req, res) => {
  try {

    const bookings = await Booking.find()
      .populate("user", "-password")
      .populate("service");

    res.status(200).json({
      success: true,
      bookings,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
export const updateBookingStatus = async (req, res) => {
  try {

    const { status } = req.body;

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Booking status updated",
      booking,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};