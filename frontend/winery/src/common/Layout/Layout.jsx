import React from "react";
import "./Layout.css";
import Footer from "footer/Footer";

function Layout({ children }) {
  return (
    <div className="container">
      <div className="header"></div>
      <main className="main-content">{children}</main>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
