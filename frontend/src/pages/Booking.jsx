import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [service, setService] = useState({});

  const [formData, setFormData] = useState({
    bookingDate: "",
    timeSlot: "",
    address: "",
    notes: "",
  });

  useEffect(() => {`1 `
    getService();
  }, []);

  const getService = async () => {
    try {
      const { data } = await API.get(`/services/${id}`);

      if (data.success) {
        setService(data.service);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const bookingHandler = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const { data } = await API.post(
        "/bookings",
        {
          service: id,
          ...formData,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.success) {
        alert("Booking Successful");

        navigate("/my-bookings");
      }
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Booking Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-4xl font-bold mb-8">
          Book Service
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left */}

          <div>

            <img
              src={
                service.image ||
                "https://via.placeholder.com/500"
              }
              alt=""
              className="rounded-xl w-full h-80 object-cover"
            />

            <h2 className="text-3xl font-bold mt-5">
              {service.title}
            </h2>

            <p className="mt-3 text-gray-600">
              {service.description}
            </p>

            <h3 className="mt-5 text-2xl font-bold text-blue-600">
              ₹{service.price}
            </h3>

          </div>

          {/* Right */}

          <form
            onSubmit={bookingHandler}
            className="space-y-5"
          >

            <input
              type="date"
              name="bookingDate"
              className="w-full border rounded-lg p-3"
              value={formData.bookingDate}
              onChange={changeHandler}
              required
            />

            <select
              name="timeSlot"
              className="w-full border rounded-lg p-3"
              value={formData.timeSlot}
              onChange={changeHandler}
              required
            >
              <option value="">
                Select Time
              </option>

              <option>09:00 AM</option>

              <option>10:00 AM</option>

              <option>11:00 AM</option>

              <option>12:00 PM</option>

              <option>02:00 PM</option>

              <option>03:00 PM</option>

              <option>04:00 PM</option>

            </select>

            <textarea
              name="address"
              placeholder="Enter Address"
              rows="4"
              className="w-full border rounded-lg p-3"
              value={formData.address}
              onChange={changeHandler}
              required
            />

            <textarea
              name="notes"
              placeholder="Additional Notes"
              rows="3"
              className="w-full border rounded-lg p-3"
              value={formData.notes}
              onChange={changeHandler}
            />

            <button
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
            >
              Book Now
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Booking;