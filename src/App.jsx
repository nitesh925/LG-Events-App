import React from "react";

import { AuthProvider } from "./authContext"; // Adjust path if needed
import './styles/App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Matches from "./pages/Matches";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ServiceDetail from './pages/ServiceDetail';
import EntryPage from './pages/Entry';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <div className="app-container">
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<EntryPage/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
      </Routes>
      <Footer />
    </AuthProvider>
    </div>
  );
};

export default App;
