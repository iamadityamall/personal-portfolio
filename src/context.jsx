import React, { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <AppContext.Provider
      value={{
        sidebar,
        setSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
