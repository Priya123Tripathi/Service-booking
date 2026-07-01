import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post("/auth/signup", formData);

      if (data.success) {
        alert("Signup Successful");
        navigate("/login");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Signup Failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-xl p-8 w-[420px]">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Signup
        </h1>

        <form onSubmit={submitHandler} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            className="w-full border rounded-lg p-3"
            value={formData.name}
            onChange={changeHandler}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="w-full border rounded-lg p-3"
            value={formData.email}
            onChange={changeHandler}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Enter Phone"
            className="w-full border rounded-lg p-3"
            value={formData.phone}
            onChange={changeHandler}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="w-full border rounded-lg p-3"
            value={formData.password}
            onChange={changeHandler}
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
          >
            Signup
          </button>
        </form>

        <p className="text-center mt-6">
          Already have an account?
          <Link to="/login" className="text-blue-600 ml-2">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;