import React from "react";
import "./AboutUsPage.css";

function AboutUsPage() {
  return (
    <div className="about-us-page">
      <h2>Welcome to Our Winery</h2>
      <img
        src="https://hips.hearstapps.com/hmg-prod/images/red-wine-benefits-1592243220.jpg?crop=0.691xw:1.00xh;0.228xw,0&resize=1200:*"
        alt="Winery Image"
        className="about-us-image"
      />
      <p>
        At <strong>Our Winery</strong>, we are dedicated to producing
        exceptional wines that captivate the senses and elevate your wine
        experience.
      </p>
      <h3>Our Commitment</h3>
      <p>
        Our commitment to quality is reflected in every bottle we produce. From
        the vineyards to your glass, we prioritize excellence at every step of
        the winemaking process.
      </p>
      <img
        src="https://images.immediate.co.uk/production/volatile/sites/30/2023/08/Glass-of-red-wine-3b3185e.jpg?quality=90&resize=440,400"
        alt="Winery Image"
        className="about-us-image"
      />
      <blockquote>
        "Wine is sunlight, held together by water." - Galileo Galilei
      </blockquote>
      <p>
        Experience the artistry and craftsmanship that goes into each of our
        wines. Join us on a journey of flavors and discover the essence of Our
        Winery.
      </p>
    </div>
  );
}

export default AboutUsPage;
