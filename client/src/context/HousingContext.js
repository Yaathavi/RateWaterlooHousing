import React, { useState, createContext } from "react";

export const HousingContext = createContext();

export const HousingContextProvider = (props) => {
  const [housing, setHousing] = useState([]);

  const addHousingEntry = (newHousing) => {
    setHousing([...housing, newHousing]);
  };
  return (
    <HousingContext.Provider value={{ housing, setHousing, addHousingEntry }}>
      {props.children}
    </HousingContext.Provider>
  );
};
