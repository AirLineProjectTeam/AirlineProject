import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "./Assets/Image1.jpg";

function CardsHome() {
  const [trips, setTrips] = useState([]);
  const [lowestPrice, setLowestPrice] = useState(null);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get(
          "https://airline-tickets-46241-default-rtdb.firebaseio.com/trips/Trips.json"
        );
        if (response.data) {
          const tripsArray = Object.keys(response.data).map((key) => ({
            id: key,
            ...response.data[key],
          }));

          const minPrice = Math.min(
            ...tripsArray.map((trip) => parseFloat(trip.Price))
          );
          setLowestPrice(minPrice);
          setTrips(tripsArray.slice(0, 3));
        }
      } catch (error) {
        console.error("Error fetching trips:", error);
      }
    };

    fetchTrips();
  }, []);

  const handleTripClick = (trip) => {
    trips.map(() => {
      sessionStorage.setItem("trip", JSON.stringify(trip));
      console.log(trip);
    });
  };

  return (
    <>
      <div className="bg-gradient-to-br from-purple-200 to-red-200 p-20">
        <div className="mt-5 sm:mt-40 text-center mb-6 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Explore the Cheapiest flights in SkyLine!
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-4 sm:mt-0">
          <div className="max-w-2xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="relative">
              <img
                className="rounded-t-lg object-cover w-[] sm:w-[400px]"
                src="https://getwallpapers.com/wallpaper/full/9/8/e/425031.jpg"
              />
            </div>
            <div className="p-4">
              <p className="text-lg font-semibold text-green-600">$150</p>
              <p className="text-sm text-gray-600">Price per adult</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                To: destenation
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardsHome;
