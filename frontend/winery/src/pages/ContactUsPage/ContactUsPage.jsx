import React from "react";
import "./ContactUsPage.css";

function ContactUsPage() {
  return (
    <div className="contact-us-page">
      <h1>Contact Us</h1>
      <p>
        Thank you for visiting our winery! If you have any questions or
        inquiries, feel free to reach out to us.
      </p>
      <div className="contact-images">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT3DTRx3WcY1mz517KA97DXd03IQgqtfUanKKQPkpPVw&s"
          alt="Contact Image 1"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT3DTRx3WcY1mz517KA97DXd03IQgqtfUanKKQPkpPVw&s"
          alt="Contact Image 2"
        />
      </div>
      <p>
        We are passionate about providing you with the finest wines and
        excellent customer service. Your satisfaction is our top priority.
      </p>
    </div>
  );
}

export default ContactUsPage;
