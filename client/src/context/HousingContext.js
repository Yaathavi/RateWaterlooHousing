import React, { useState, createContext } from "react";

export const HousingContext = createContext();

export const HousingContextProvider = (props) => {
  const [housing, setHousing] = useState([]);
  return (
    <HousingContext.Provider value={{ housing, setHousing }}>
      {props.children}
    </HousingContext.Provider>
  );
};
