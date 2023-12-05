import React from "react";
import "./Layout.css";
import Footer from "footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../../context/ApplicatinContext";
import { logout } from "../../services/userService";

function Layout({ children }) {
  const { isLoggedIn, setIsLoggedIn } = useApp();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      setIsLoggedIn(false);
      navigate("/");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  return (
    <div className="container">
      <div className="header">
        <nav className="nav-bar">
          <div className="left-section">
            {!isLoggedIn ? (
              <Link to="/login">Login</Link>
            ) : (
              <button onClick={handleLogout}>Logout</button>
            )}
            <Link to="/register">Register</Link>
          </div>
          <div className="right-section">
            <Link to="/">Home</Link>
            <Link to="/who-we-are">Who we are</Link>
            <Link to="/wine-list">Wine List</Link>
            <Link to="/contact-us">Contact Us</Link>
          </div>
        </nav>
      </div>
      <main className="main-content">{children}</main>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
