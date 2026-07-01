import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">

      <img
        src={service.image || "https://via.placeholder.com/400"}
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

          <span>{service.duration}</span>
        </div>

        <div className="flex gap-3 mt-6">

          <Link
            to={`/services/${service._id}`}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg"
          >
            Details
          </Link>

          <Link
            to={`/booking/${service._id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Book
          </Link>

        </div>

      </div>

    </div>
  );
};

export default ServiceCard;