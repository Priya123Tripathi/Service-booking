import { useEffect, useState } from "react";
import API from "../services/api";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  const token = localStorage.getItem("token");

  const getBookings = async () => {
    try {
      const { data } = await API.get("/bookings/my", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (data.success) {
        setBookings(data.bookings);
      }
    } catch (error) {
      console.log(error);
      alert("Failed to load bookings");
    }
  };

  const cancelBooking = async (id) => {
    try {
      const { data } = await API.put(
        `/bookings/${id}/cancel`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.success) {
        alert("Booking Cancelled");
        getBookings();
      }
    } catch (error) {
      console.log(error);
      alert("Failed to cancel booking");
    }
  };

  useEffect(() => {
    getBookings();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-10">
          My Bookings
        </h1>

        {bookings.length === 0 ? (
          <h2 className="text-center text-xl">
            No Bookings Found
          </h2>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {bookings.map((booking) => (
              <div
                key={booking._id}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >

                <img
                  src={
                    booking.service.image ||
                    "https://via.placeholder.com/400"
                  }
                  alt=""
                  className="w-full h-52 object-cover"
                />

                <div className="p-5">

                  <h2 className="text-2xl font-bold">
                    {booking.service.title}
                  </h2>

                  <p className="mt-2">
                    <strong>Date:</strong>{" "}
                    {new Date(
                      booking.bookingDate
                    ).toLocaleDateString()}
                  </p>

                  <p>
                    <strong>Time:</strong>{" "}
                    {booking.timeSlot}
                  </p>

                  <p>
                    <strong>Address:</strong>{" "}
                    {booking.address}
                  </p>

                  <p className="mt-3">
                    <strong>Status:</strong>{" "}
                    <span
                      className={`font-bold ${
                        booking.status === "Pending"
                          ? "text-yellow-500"
                          : booking.status === "Confirmed"
                          ? "text-blue-600"
                          : booking.status === "Completed"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </p>

                  {booking.status === "Pending" && (
                    <button
                      onClick={() =>
                        cancelBooking(booking._id)
                      }
                      className="mt-5 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
                    >
                      Cancel Booking
                    </button>
                  )}
                </div>

              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
};

export default MyBookings;