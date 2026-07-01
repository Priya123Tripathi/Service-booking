import { useEffect, useState } from "react";
import API from "../services/api";

const AdminDashboard = () => {
  const token = localStorage.getItem("token");

  const [dashboard, setDashboard] = useState({
    totalUsers: 0,
    totalServices: 0,
    totalBookings: 0,
    pendingBookings: 0,
    completedBookings: 0,
  });

  const getDashboard = async () => {
    try {
      const { data } = await API.get("/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (data.success) {
        setDashboard(data.dashboard);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDashboard();
  }, []);

  const cards = [
    {
      title: "Total Users",
      value: dashboard.totalUsers,
      color: "bg-blue-500",
    },
    {
      title: "Total Services",
      value: dashboard.totalServices,
      color: "bg-green-500",
    },
    {
      title: "Total Bookings",
      value: dashboard.totalBookings,
      color: "bg-purple-500",
    },
    {
      title: "Pending",
      value: dashboard.pendingBookings,
      color: "bg-yellow-500",
    },
    {
      title: "Completed",
      value: dashboard.completedBookings,
      color: "bg-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-10">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.color} text-white rounded-xl p-6 shadow-lg`}
          >
            <h2 className="text-lg font-semibold">
              {card.title}
            </h2>

            <h1 className="text-4xl font-bold mt-5">
              {card.value}
            </h1>
          </div>
        ))}

      </div>

      <div className="mt-12 bg-white rounded-xl shadow-lg p-8">

        <h2 className="text-2xl font-bold mb-5">
          Admin Panel
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <button className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Add Service
          </button>

          <button className="bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
            Manage Services
          </button>

          <button className="bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700">
            Manage Bookings
          </button>

        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;