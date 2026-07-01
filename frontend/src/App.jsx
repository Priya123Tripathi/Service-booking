import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import MyBookings from "./pages/MyBooking";
import ServiceDetails from "./pages/ServiceDetails";
import Navbar from "./components/Navbar";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
  
       <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/services" element={<Services />} />
        
        <Route path="/services/:id" element={<ServiceDetails />}/>
      
       <Route path="/profile" element={ <PrivateRoute><Profile /></PrivateRoute>}/>

<Route
  path="/my-bookings"
  element={
    <PrivateRoute>
      <MyBookings />
    </PrivateRoute>
  }
/>

<Route
  path="/booking/:id"
  element={
    <PrivateRoute>
      <Booking />
    </PrivateRoute>
  }
/>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;