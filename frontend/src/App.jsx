<<<<<<< HEAD
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import LogIn from "./pages/LogIn";
import AdminDashboard from "./pages/AdminDashboard";
import StaffDashboard from "./pages/StaffDashboard";

function App() {
  return (
    <BrowserRouter>  
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<LogIn />} />
=======
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import StaffDashboard from "./pages/StaffDashboard";

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
>>>>>>> 5f807bdb345c133a5bbdb90aa882de12c81590e7
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/staff/dashboard" element={<StaffDashboard />} />
      </Routes>
    </BrowserRouter>
<<<<<<< HEAD
  );
}

export default App;
=======
  )
}

export default App;
>>>>>>> 5f807bdb345c133a5bbdb90aa882de12c81590e7
