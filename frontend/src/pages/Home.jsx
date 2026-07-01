import { Link } from "react-router-dom";

const services = [
  {
    title: "AC Repair",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500",
  },
  {
    title: "Electrician",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500",
  },
  {
    title: "Plumber",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=500",
  },
  {
    title: "Cleaning",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500",
  },
];

const Home = () => {
  return (
    <div className="bg-gray-100">

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

          <div className="md:w-1/2">

            <h1 className="text-5xl font-bold leading-tight">
              Book Trusted Home Services
            </h1>

            <p className="mt-6 text-lg">
              AC Repair, Cleaning, Electrician, Plumber and many more services
              at your doorstep.
            </p>

            <Link
              to="/services"
              className="inline-block mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200"
            >
              Explore Services
            </Link>

          </div>

          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700"
            alt=""
            className="w-full md:w-[500px] rounded-xl mt-10 md:mt-0"
          />

        </div>
      </section>

      {/* Categories */}
      <section className="py-16 max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Popular Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition"
            >

              <img
                src={service.image}
                alt=""
                className="h-52 w-full object-cover"
              />

              <div className="p-5">

                <h3 className="text-xl font-semibold">
                  {service.title}
                </h3>

                <Link
                  to="/services"
                  className="inline-block mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg"
                >
                  Book Now
                </Link>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="bg-white py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="shadow-lg rounded-xl p-8 text-center">

              <h3 className="text-xl font-bold">
                Verified Professionals
              </h3>

              <p className="mt-4 text-gray-600">
                All our service providers are verified and experienced.
              </p>

            </div>

            <div className="shadow-lg rounded-xl p-8 text-center">

              <h3 className="text-xl font-bold">
                Affordable Pricing
              </h3>

              <p className="mt-4 text-gray-600">
                Best prices with no hidden charges.
              </p>

            </div>

            <div className="shadow-lg rounded-xl p-8 text-center">

              <h3 className="text-xl font-bold">
                24/7 Support
              </h3>

              <p className="mt-4 text-gray-600">
                Customer support available anytime.
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;