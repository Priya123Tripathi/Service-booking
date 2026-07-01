const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h2 className="text-2xl font-bold">ServiceHub</h2>
            <p className="mt-3 text-gray-400">
              Book trusted home services at affordable prices.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Quick Links</h2>

            <ul className="mt-4 space-y-2 text-gray-400">
              <li>Home</li>
              <li>Services</li>
              <li>Profile</li>
              <li>My Bookings</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Contact</h2>

            <p className="mt-4 text-gray-400">
              Email : support@servicehub.com
            </p>

            <p className="text-gray-400">
              Phone : +91 9876543210
            </p>
          </div>

        </div>

        <hr className="my-8 border-gray-700"/>

        <p className="text-center text-gray-500">
          © 2026 ServiceHub. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;