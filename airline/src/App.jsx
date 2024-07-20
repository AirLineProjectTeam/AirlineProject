import { BrowserRouter as Router, Link } from "react-router-dom";
import React from "react";
import "./index.css";
import Dashboard from "./component/pages/dashboard/Dashboard";
import { PaypalButton } from "./component/pages/checkoutPage/paypalbutton";
import { ContextProvider } from "./component/sharedComponents/contextProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TicketsCatalogue from "./component/pages/ticketsCatalogue/TicketsCatalogue";

function App() {
  return <ContextProvider>
<BrowserRouter>
<Routes>
    <Route >
        
    </Route>
</Routes>
</BrowserRouter>
  </ContextProvider>;
}

export default App;
