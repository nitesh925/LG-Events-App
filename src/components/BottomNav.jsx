import React from "react";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import EventIcon from "@mui/icons-material/Event";
import PersonIcon from "@mui/icons-material/Person";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import "../styles/BottomNav.css";

const BottomNav = () => {
  const location = useLocation();

  return (
    <div className="bottom-nav">
      <Link to="/home" className={location.pathname === "/home" ? "active" : ""}>
        <HomeIcon />
        <span>Home</span>
      </Link>
      <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
        <EventIcon />
        <span>Events</span>
      </Link>
      <Link to="/profile" className={location.pathname === "/profile" ? "active" : ""}>
        <PersonIcon />
        <span>Profile</span>
      </Link>
      <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
        <ContactMailIcon />
        <span>Contact</span>
      </Link>
    </div>
  );
};

export default BottomNav;
