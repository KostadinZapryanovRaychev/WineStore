import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateWinePage.css";
import { createWine } from "../../services/wineService";
import { useApp } from "../../context/ApplicatinContext";

function CreateWinePage() {
  const navigate = useNavigate();
  const { setHasBeenNewWineCreated } = useApp();

  const [wineData, setWineData] = useState({
    name: "",
    price: 0,
    description: "",
    photo: "",
    qty: 0,
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWineData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createWine(wineData);
      setHasBeenNewWineCreated((prev) => !prev);
      navigate("/wine-list");
    } catch (error) {
      console.error("Error creating wine:", error.message);
    }
  };

  const handleBack = () => {
    navigate("/wine-list");
  };

  return (
    <div className="create-wine-container">
      <h2>Create New Wine</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={wineData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={wineData.price}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={wineData.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Photo URL:
          <input
            type="text"
            name="photo"
            value={wineData.photo}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            name="qty"
            value={wineData.qty}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={wineData.category}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Create Wine</button>
      </form>
      <button className="button-back" onClick={handleBack}>
        Back to Wine List
      </button>
    </div>
  );
}

export default CreateWinePage;
