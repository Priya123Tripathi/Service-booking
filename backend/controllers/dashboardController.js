import User from "../models/User.js";
import Service from "../models/Service.js";
import Booking from "../models/Booking.js";

export const adminDashboard = async (req, res) => {
  try {

    const totalUsers = await User.countDocuments();

    const totalServices = await Service.countDocuments();

    const totalBookings = await Booking.countDocuments();

    const pendingBookings = await Booking.countDocuments({
      status: "Pending",
    });

    const completedBookings = await Booking.countDocuments({
      status: "Completed",
    });

    res.status(200).json({
      success: true,
      dashboard: {
        totalUsers,
        totalServices,
        totalBookings,
        pendingBookings,
        completedBookings,
      },
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};