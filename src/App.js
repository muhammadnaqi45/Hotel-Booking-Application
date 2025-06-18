import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import BookingScreen from "./Screens/BookingScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import LoginScreen from "./Screens/LoginScreen";
import Profile from "./Screens/Profile";
import LandingPage from "./Screens/LandingPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route
            path="/book/:roomid/:fromDate/:toDate"
            element={<BookingScreen />}
          />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/login" exact element={<LoginScreen />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
