import React from "react";
import { useState } from "react";
export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
  const [currentUser, setUser] = useState("");
  const [trip, setTrip] = useState("");
  const [progress, setProgress] = useState("Details");
  const [quantity, setQuantity] = useState(1);
  const [ticketType, setTicket] = useState("");

  return (
    <Context.Provider
      value={{
        user: [currentUser, setUser],
        trip: [trip, setTrip],
        progress: [progress, setProgress],
        quantity: [quantity, setQuantity],
        ticketType: [ticketType, setTicket],
      }}
    >
      {children}
    </Context.Provider>
  );
};
