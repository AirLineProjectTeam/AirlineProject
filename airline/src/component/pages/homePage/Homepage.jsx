import { Link } from "react-router-dom";
import React from "react";
import HomeSlider from "./HomeSlider";
import CardsHome from "./CardsHome";
import Header from "../header/Header";
import Features from "./Features;";
import TeamSection from "./TeamSection";
import TicketCard from "./TicketCard";
import Footer from "../footer/Footer";
import MyLocation from "../geolocation/Geolocation";
import ImageSliderr from "../homePage/ImageSlider1";

function Home() {
  return (
    <>
      <Header />
      <HomeSlider />
      <Features />
      <TeamSection />
      <TicketCard />
      <CardsHome />
      <MyLocation />
      <Footer />

      {/* <ul>
           <li className="mr-5"><Link to="/Home" className="no-underline text-black">Home</Link></li>
         </ul> */}
    </>
  );
}
export default Home;
