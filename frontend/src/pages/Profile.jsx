import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const getProfile = async () => {
    try {
      const { data } = await API.get("/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
 
console.log("Profile Response:", data);
      if (data.success) {
        setUser(data.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const changeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const updateHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.put(
        "/auth/profile",
        {
          name: user.name,
          phone: user.phone,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.success) {
        alert("Profile Updated");
      }
    } catch (error) {
      console.log(error);
      alert("Update Failed");
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white shadow-xl rounded-xl p-8 w-[450px]">

        <div className="flex justify-center">

          <img
            src="https://ui-avatars.com/api/?name=User&background=2563eb&color=fff"
            alt=""
            className="w-28 h-28 rounded-full"
          />

        </div>

        <h1 className="text-3xl font-bold text-center mt-5">
          My Profile
        </h1>

        <form
          onSubmit={updateHandler}
          className="space-y-5 mt-8"
        >

          <input
            type="text"
            name="name"
            value={user.name}
            onChange={changeHandler}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            value={user.email}
            disabled
            className="w-full border p-3 rounded-lg bg-gray-100"
          />

          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={changeHandler}
            className="w-full border p-3 rounded-lg"
          />

   <button
     className="mt-5 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-red-600">
    Update profile
   </button>
        </form>

        <button
          onClick={logoutHandler}
          className="mt-5 w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>

      </div>

    </div>
  );
};

export default Profile;