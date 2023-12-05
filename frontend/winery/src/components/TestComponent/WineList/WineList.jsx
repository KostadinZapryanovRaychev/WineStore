// WineList.jsx

import React from "react";
import "./WineList.css";
import WineCard from "../WineCard/WineCard";

function WineList() {
  const handleEditClick = (id) => {
    console.log(`Edit button clicked for wine with id ${id}`);
  };

  const handleDeleteClick = (id) => {
    console.log(`Delete button clicked for wine with id ${id}`);
  };
  const wineDataArray = [
    {
      id: 1,
      name: "Sample Wine 1",
      price: 25.99,
      description: "A description of the sample wine 1.",
      photo:
        "https://i5.walmartimages.com/seo/Meiomi-California-Pinot-Noir-Red-Wine-750-ml-Bottle-13-5-ABV_598f75e3-426c-4dd3-99b9-de4592aa1d2b.3f4bfb2ec49ce300d354f5cdb5bc1e0b.jpeg",
      qty: 10,
      category: "Red Wine",
    },
    {
      id: 2,
      name: "Sample Wine 2",
      price: 32.5,
      description: "A description of the sample wine 2.",
      photo:
        "https://i5.walmartimages.com/seo/Meiomi-California-Pinot-Noir-Red-Wine-750-ml-Bottle-13-5-ABV_598f75e3-426c-4dd3-99b9-de4592aa1d2b.3f4bfb2ec49ce300d354f5cdb5bc1e0b.jpeg",
      qty: 8,
      category: "White Wine",
    },
    {
      id: 3,
      name: "Sample Wine 2",
      price: 32.5,
      description: "A description of the sample wine 2.",
      photo:
        "https://i5.walmartimages.com/seo/Meiomi-California-Pinot-Noir-Red-Wine-750-ml-Bottle-13-5-ABV_598f75e3-426c-4dd3-99b9-de4592aa1d2b.3f4bfb2ec49ce300d354f5cdb5bc1e0b.jpeg",
      qty: 8,
      category: "White Wine",
    },
    {
      id: 4,
      name: "Sample Wine 2",
      price: 32.5,
      description: "A description of the sample wine 2.",
      photo:
        "https://i5.walmartimages.com/seo/Meiomi-California-Pinot-Noir-Red-Wine-750-ml-Bottle-13-5-ABV_598f75e3-426c-4dd3-99b9-de4592aa1d2b.3f4bfb2ec49ce300d354f5cdb5bc1e0b.jpeg",
      qty: 8,
      category: "White Wine",
    },
    {
      id: 5,
      name: "Sample Wine 2",
      price: 32.5,
      description: "A description of the sample wine 2.",
      photo:
        "https://i5.walmartimages.com/seo/Meiomi-California-Pinot-Noir-Red-Wine-750-ml-Bottle-13-5-ABV_598f75e3-426c-4dd3-99b9-de4592aa1d2b.3f4bfb2ec49ce300d354f5cdb5bc1e0b.jpeg",
      qty: 8,
      category: "White Wine",
    },
    {
      id: 6,
      name: "Sample Wine 2",
      price: 32.5,
      description: "A description of the sample wine 2.",
      photo:
        "https://i5.walmartimages.com/seo/Meiomi-California-Pinot-Noir-Red-Wine-750-ml-Bottle-13-5-ABV_598f75e3-426c-4dd3-99b9-de4592aa1d2b.3f4bfb2ec49ce300d354f5cdb5bc1e0b.jpeg",
      qty: 8,
      category: "White Wine",
    },
  ];

  return (
    <div className="wine-list">
      {wineDataArray.map((wineData) => (
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
