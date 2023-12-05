import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ApplicationContext = createContext();

export function useApp() {
  return useContext(ApplicationContext);
}

export function ApplicationProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(true);

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    userId,
    setUserId,
  };

  return <ApplicationContext.Provider value={value}>{children}</ApplicationContext.Provider>;
}
