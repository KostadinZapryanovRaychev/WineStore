import React, { createContext, useContext, useState, useEffect } from "react";
import { getAllWines } from "../services/wineService";

const ApplicationContext = createContext();

export function useApp() {
  return useContext(ApplicationContext);
}

export function ApplicationProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(true);
  const [hasBeenNewWineCreated, setHasBeenNewWineCreated] = useState(false);
  const [hasBeenWineDeleted, setHasBeenWineDeleted] = useState(false);
  const [hasBeenWineUpdated, setHasBeenWineUpdated] = useState(false);
  const [wines, setWines] = useState([]);

  useEffect(() => {
    const fetchWines = async () => {
      try {
        const winesData = await getAllWines();
        setWines(winesData);
      } catch (error) {
        console.error("Error fetching wines:", error);
      }
    };

    fetchWines();
  }, [hasBeenNewWineCreated, hasBeenWineDeleted, hasBeenWineUpdated]);

  useEffect(() => {
    const token = getAuthToken();
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    userId,
    setUserId,
    wines,
    setHasBeenNewWineCreated,
    setHasBeenWineDeleted,
    setHasBeenWineUpdated,
  };

  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  );
}

function getAuthToken() {
  const token = sessionStorage.getItem("authToken");
  return token;
}
