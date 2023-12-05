// WineList.jsx

import React from "react";
import "./WineList.css";
import WineCard from "../WineCard/WineCard";
import { useApp } from "../../../context/ApplicatinContext";
import { deleteWine } from "../../../services/wineService";
import { useNavigate } from "react-router-dom";

function WineList() {
  const { wines, setHasBeenWineDeleted } = useApp();
  const navigate = useNavigate();
  const handleEditClick = (wine) => {
    navigate(`/edit-wine`, { state: { wine } });
  };

  const handleDeleteClick = async (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this wine?"
    );

    if (isConfirmed) {
      const res = await deleteWine(id);
      if (res) {
        setHasBeenWineDeleted((prev) => !prev);
      }
    } else {
      console.log("Deletion canceled");
    }
  };

  return (
    <div className="wine-list">
      {wines.map((wineData) => (
        <WineCard
          key={wineData?._id}
          wineData={wineData}
          onEditClick={() => handleEditClick(wineData)}
          onDeleteClick={() => handleDeleteClick(wineData?._id)}
        />
      ))}
    </div>
  );
}

export default WineList;
