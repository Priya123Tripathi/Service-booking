import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const getServices = async () => {
    try {
      const { data } = await API.get("/services");

      if (data.success) {
        setServices(data.services);
      }
    } catch (error) {
      console.log(error);
      alert("Failed to fetch services");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center mb-10">
          Our Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (
            <div
              key={service._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={
                  service.image ||
                  "https://via.placeholder.com/400x250"
                }
                alt={service.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">

                <h2 className="text-2xl font-bold">
                  {service.title}
                </h2>

                <p className="text-gray-600 mt-2">
                  {service.description}
                </p>

                <div className="flex justify-between mt-4">

                  <span className="text-blue-600 font-bold">
                    ₹{service.price}
                  </span>

                  <span>
                    {service.duration}
                  </span>

                </div>

                <div className="flex gap-3 mt-6">

                  <Link
                    to={`/services/${service._id}`}
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg"
                  >
                    View Details
                  </Link>

                  <Link
                    to={`/booking/${service._id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                  >
                    Book Now
                  </Link>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default Services;