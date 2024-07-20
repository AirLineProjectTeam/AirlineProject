import React from "react";
import { useState } from "react";
export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
  const [currentUser, setUser] = useState("");
  const [trip, setTrip] = useState("");

  return (
    <Context.Provider
      value={{ user: [currentUser, setUser], trip: [trip, setTrip] }}
    >
      {children}
    </Context.Provider>
  );
};
