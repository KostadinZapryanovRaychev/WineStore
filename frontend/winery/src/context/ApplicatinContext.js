import React, { createContext, useContext, useState, useEffect } from "react";
import { getAllWines } from "../services/wineService";

const ApplicationContext = createContext();

export function useApp() {
  return useContext(ApplicationContext);
}

export function ApplicationProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(true);
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
  }, []);

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    userId,
    setUserId,
    wines,
  };

  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  );
}
