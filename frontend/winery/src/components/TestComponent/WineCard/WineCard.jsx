// WineCard.jsx

import React from "react";
import "./WineCard.css";
import { useApp } from "../../../context/ApplicatinContext";

function WineCard({ wineData, onEditClick, onDeleteClick }) {
  const { id, name, price, description, photo, qty, category } = wineData;
  const { isLoggedIn } = useApp();
  return (
    <div className="wine-card">
      <img src={photo} alt={name} className="wine-image" />
      <div className="wine-details">
        <h2>{name}</h2>
        <p className="wine-price">${price.toFixed(2)}</p>
        <p>{description}</p>
        <p>Available Quantity: {qty}</p>
        <p>Category: {category}</p>
      </div>
      {isLoggedIn && (
        <div className="button-container">
          <button className="edit-button" onClick={onEditClick}>
            Edit
          </button>
          <button className="delete-button" onClick={onDeleteClick}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default WineCard;
