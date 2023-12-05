// WineList.jsx

import React from "react";
import "./WineList.css";
import WineCard from "../WineCard/WineCard";
import { useApp } from "../../../context/ApplicatinContext";

function WineList() {
  const { wines } = useApp();
  const handleEditClick = (id) => {
    console.log(`Edit button clicked for wine with id ${id}`);
  };

  const handleDeleteClick = (id) => {
    console.log(`Delete button clicked for wine with id ${id}`);
  };


  

  return (
    <div className="wine-list">
      {wines.map((wineData) => (
        <WineCard
          key={wineData.id}
          wineData={wineData}
          onEditClick={() => handleEditClick(wineData.id)}
          onDeleteClick={() => handleDeleteClick(wineData.id)}
        />
      ))}
    </div>
  );
}

export default WineList;
