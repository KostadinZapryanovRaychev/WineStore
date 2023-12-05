import React, { useState } from "react";
import "./EditWine.css";
import { updateWine } from "../../services/wineService";
import { useNavigate, useLocation } from "react-router-dom";
import { useApp } from "../../context/ApplicatinContext";

function EditWine() {
  const navigate = useNavigate();
  const { wine } = useLocation().state;
  const [editedWine, setEditedWine] = useState(wine);
  const { setHasBeenWineUpdated } = useApp();

  const handleSaveClick = async () => {
    const confirmUpdate = window.confirm(
      "Are you sure you want to save changes?"
    );
    if (confirmUpdate) {
      try {
        const res = await updateWine(wine._id, editedWine);
        if (res) {
          setHasBeenWineUpdated((prev) => !prev);
        }
        navigate("/wine-list");
      } catch (error) {
        console.error("Error updating wine:", error.message);
      }
    }
  };

  const handleBackClick = () => {
    navigate("/wine-list");
  };

  return (
    <div className="edit-wine">
      <h2>Edit Wine</h2>
      <form>
        <label>Name:</label>
        <input
          type="text"
          value={editedWine.name}
          onChange={(e) =>
            setEditedWine({ ...editedWine, name: e.target.value })
          }
        />

        <label>Price:</label>
        <input
          type="number"
          value={editedWine.price}
          onChange={(e) =>
            setEditedWine({ ...editedWine, price: parseFloat(e.target.value) })
          }
        />

        <label>Description:</label>
        <textarea
          value={editedWine.description}
          onChange={(e) =>
            setEditedWine({ ...editedWine, description: e.target.value })
          }
        />

        <label>Photo:</label>
        <input
          type="text"
          value={editedWine.photo}
          onChange={(e) =>
            setEditedWine({ ...editedWine, photo: e.target.value })
          }
        />

        <label>Quantity:</label>
        <input
          type="number"
          value={editedWine.qty}
          onChange={(e) =>
            setEditedWine({ ...editedWine, qty: parseInt(e.target.value, 10) })
          }
        />

        <label>Category:</label>
        <input
          type="text"
          value={editedWine.category}
          onChange={(e) =>
            setEditedWine({ ...editedWine, category: e.target.value })
          }
        />
      </form>

      <div className="buttons">
        <button className="button" onClick={handleSaveClick}>
          Save
        </button>
        <button className="button" onClick={handleBackClick}>
          Back
        </button>
      </div>
    </div>
  );
}

export default EditWine;
