import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../services/api";

const ServiceDetails = () => {
  const { id } = useParams();

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  const getService = async () => {
    try {
      const { data } = await API.get(`/services/${id}`);

      if (data.success) {
        setService(data.service);
      }
    } catch (error) {
      console.log(error);
      alert("Failed to load service");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getService();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center text-2xl font-bold">
        Loading...
      </div>
    );
  }

  if (!service) {
    return (
      <div className="h-screen flex justify-center items-center text-2xl">
        Service Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden grid md:grid-cols-2">

        <img
          src={
            service.image ||
            "https://via.placeholder.com/600x400"
          }
          alt={service.title}
          className="w-full h-full object-cover"
        />

        <div className="p-10">

          <h1 className="text-4xl font-bold">
            {service.title}
          </h1>

          <p className="text-gray-600 mt-5">
            {service.description}
          </p>

          <div className="mt-8 space-y-4">

            <p>
              <span className="font-bold">
                Category :
              </span>{" "}
              {service.category}
            </p>

            <p>
              <span className="font-bold">
                Duration :
              </span>{" "}
              {service.duration}
            </p>

            <p className="text-3xl font-bold text-blue-600">
              ₹{service.price}
            </p>

          </div>

          <Link
            to={`/booking/${service._id}`}
            className="inline-block mt-10 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
          >
            Book Now
          </Link>

        </div>

      </div>

    </div>
  );
};

export default ServiceDetails;