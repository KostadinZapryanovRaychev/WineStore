import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <img
          src="https://scontent.fsof9-1.fna.fbcdn.net/v/t39.30808-6/292479755_453196423478579_4289287838544782048_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=783fdb&_nc_ohc=S3d2eaSw5kwAX91E-Rz&_nc_ht=scontent.fsof9-1.fna&oh=00_AfC8jDlvn1c_e8dUSVHGTaJF8RY_M_xIerz2630Xo1-DCw&oe=65747DA4"
          alt="Winery Background"
          className="hero-image"
        />
        <div className="hero-content">
          <h1>Welcome to Our Winery</h1>
          <p>
            "Wine is the only artwork you can drink." - Luis Fernando Olaverri
          </p>
        </div>
      </div>
      <div className="main-content">
        {/* Other content for the main section */}
        <h2>Discover the Art of Winemaking</h2>
        <p>
          Explore our exceptional collection of wines, carefully crafted to
          delight your senses. Each bottle tells a story, and we invite you to
          be a part of it.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
