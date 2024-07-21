import React from "react";
import "./index.css";
import Dashboard from "./component/pages/dashboard/Dashboard";
import { PaypalButton } from "./component/pages/checkoutPage/paypalbutton";
import { ContextProvider } from "./component/sharedComponents/contextProvider";


import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import TicketsCatalogue from "./component/pages/ticketsCatalogue/TicketsCatalogue";
import Home from "./component/pages/homePage/Homepage";

import Header from "./component/pages/header/Header";
import Footer from "./component/pages/footer/Footer";
import Login from "./component/pages/Login-Signup/login";
import Register from "./component/pages/Login-Signup/register";
import { FlightDetailsPage } from "./component/pages/flightDetailsPage/flightDetails";
import { CheckoutPage } from "./component/pages/checkoutPage/checkoutPage";


function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes></Routes>

        <Content />

      </BrowserRouter>
    </ContextProvider>
  );
}

function Content() {
  const location = useLocation();
  const hideHeaderFooter =
    location.pathname === "/Login" || location.pathname === "/Signup";


  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Flights" element={<TicketsCatalogue />} />
        <Route path="/Support" element={<Home />} />
        <Route path="/About" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Register />} />
        <Route path="/FlightDetails" element={<FlightDetailsPage />} />
        <Route path="/CheckoutPage" element={<CheckoutPage />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default App ;
