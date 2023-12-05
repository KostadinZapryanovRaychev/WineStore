import React from "react";
import "./WineList.css";
import WineList from "../../components/TestComponent/WineList/WineList";
import { useApp } from "../../context/ApplicatinContext";
import { useNavigate } from "react-router-dom";

function WineListPage() {
  const { isLoggedIn } = useApp();
  const navigate = useNavigate();

  function openCreateNewWinePage() {
    navigate("/create-new-wine");
  }
  return (
    <div className="">
      {isLoggedIn && (
        <button className="button-create-wine" onClick={openCreateNewWinePage}>
          Create new wine
        </button>
      )}
      <WineList />
    </div>
  );
}

export default WineListPage;
