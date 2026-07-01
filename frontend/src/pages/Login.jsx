import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import API from "../services/api";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
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
   
        const { data } = await API.post("/auth/login", formData);

      if (data.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        alert("Login Successful");

        navigate("/");
      }
    } catch (error) {
      alert(
        error.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white shadow-xl rounded-xl p-8 w-[400px]">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Login
        </h1>

        <form
          onSubmit={submitHandler}
          className="space-y-5"
        >

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="w-full border rounded-lg p-3 outline-none"
            value={formData.email}
            onChange={changeHandler}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="w-full border rounded-lg p-3 outline-none"
            value={formData.password}
            onChange={changeHandler}
            required
          />

          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-6">

          Don't have an account?

          <Link
            to="/signup"
            className="text-blue-600 ml-2"
          >
            Signup
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Login;