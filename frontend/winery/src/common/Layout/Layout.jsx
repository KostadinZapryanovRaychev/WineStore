import React from "react";
import "./Layout.css";
import Footer from "footer/Footer";
import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div className="container">
      <div className="header">
        <nav className="nav-bar">
          <div className="left-section">
            <Link to="/login">Login</Link>
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
