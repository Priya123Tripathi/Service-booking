import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const token = localStorage.getItem("token");

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}

          <Link
            to="/"
            className="text-2xl font-bold text-blue-600"
          >
            ServiceHub
          </Link>

          {/* Desktop Menu */}

          <div className="hidden md:flex items-center gap-8">

            <Link
              to="/"
              className="hover:text-blue-600 font-medium"
            >
              Home
            </Link>

            <Link
              to="/services"
              className="hover:text-blue-600 font-medium"
            >
              Services
            </Link>

            {token && (
              <>
                <Link
                  to="/my-bookings"
                  className="hover:text-blue-600 font-medium"
                >
                  My Bookings
                </Link>

                <Link
                  to="/profile"
                  className="hover:text-blue-600 font-medium"
                >
                  Profile
                </Link>
              </>
            )}

            {!token ? (
              <>
                <Link
                  to="/login"
                  className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  Signup
                </Link>
              </>
            ) : (
              <button
                onClick={logoutHandler}
                className="px-5 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}

        {open && (
          <div className="md:hidden pb-5 flex flex-col gap-4">

            <Link to="/">Home</Link>

            <Link to="/services">Services</Link>

            {token && (
              <>
                <Link to="/my-bookings">My Bookings</Link>

                <Link to="/profile">Profile</Link>
              </>
            )}

            {!token ? (
              <>
                <Link to="/login">Login</Link>

                <Link to="/signup">Signup</Link>
              </>
            ) : (
              <button
                onClick={logoutHandler}
                className="bg-red-500 text-white rounded-lg py-2"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;