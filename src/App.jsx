import React from "react";
import { AuthProvider } from "./authContext"; 
import './styles/App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";   // bottom nav
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Matches from "./pages/Matches";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ServiceDetail from './pages/ServiceDetail';
import EntryPage from './pages/Entry';
import PhonePage from './pages/PhonePage';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="app-container">
      <AuthProvider>
        {/* Top navigation */}
        <Navbar />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<EntryPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/booking" element={<PhonePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        {/* Footer ABOVE bottom nav */}
        <Footer />

        {/* Fixed bottom nav */}
        <BottomNav />
      </AuthProvider>
    </div>
  );
};

export default App;
