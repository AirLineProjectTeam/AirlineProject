import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Logo from "../header/assets/LOGO.png";

const TicketCard = () => {
  const [trips, setTrips] = useState([]);
  const [lowestPrice, setLowestPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get('https://airline-tickets-46241-default-rtdb.firebaseio.com/trips/Trips.json');
        if (response.data) {
          const tripsArray = Object.keys(response.data).map(key => ({
            id: key,
            ...response.data[key]
          }));

          const minPrice = Math.min(...tripsArray.map(trip => parseFloat(trip.Price)));
          setLowestPrice(minPrice);
          setTrips(tripsArray.slice(0, 3));

          // Ensure the array is not empty before calculating max price
          if (tripsArray.length > 0) {
            const prices = tripsArray.map((trip) => parseFloat(trip.Price));
            setMaxPrice(Math.max(...prices));
          }
        }
      } catch (error) {
        console.error('Error fetching trips:', error);
      }
    };

    fetchTrips();
  }, []);

  const handleTripClick = (trip) => {
    sessionStorage.setItem('trip', JSON.stringify(trip));
    console.log(trip);
  };

  const calculateDiscountedPrice = (price) => {
    const discountRate = 0.2; // 20% discount
    return (price * (1 - discountRate)).toFixed(2);
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-4 mt-20">Discounted Ticket Specials:</h2>
      <h4 className="text-lg text-center mb-0">Explore our current promotions on the most economical tickets available. Save more with our limited-time discounts!</h4>

      <div className="flex items-center justify-center h-full pt-20 relative mb-40">
        {/* Line at the left */}
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-blue-500"></div>

        <div className="w-3/4 bg-gradient-to-br from-blue-200 to-gray-200 rounded overflow-hidden shadow-lg border border-gray-300 mt-0">
          {/* Section Heading */}
          <div className="p-4 bg-gray-200 text-black">
            <h1 className="text-2xl font-bold">Cheapest Ticket!</h1>
            <h2 className="text-lg">Grab it now and save big!</h2>
          </div>

          {trips.map((trip) => (
            <div key={trip.id} className="mb-4">
              {/* Airline Image and Details */}
              <div className="flex items-center justify-between bg-gray-100 p-4">
                <div className="flex items-center">
                  <img src={Logo} alt={trip.airlinename} className="w-16 h-16 mr-4 rounded-full bg-red-300" />
                  <div>
                    <p className="text-lg font-semibold text-gray-800">{trip.airlinename}</p>
                    <p className="text-sm text-gray-600">Flight: {trip.flightNum}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Available Seats: 1 {trip.availableseats}</p>
                </div>
              </div>

              {/* Flight Details */}
              <div className="p-4">
                <p className="text-lg font-semibold text-gray-800">{trip.from} to {trip.destination}</p>
                <p className="text-sm text-gray-600">Departure: {trip.departureTime}</p>
                <p className="text-sm text-gray-600">Arrival: {trip.arrivalTime}</p>
                <p className="text-sm text-gray-600">Description: {trip.description}</p>
              </div>

              {/* Pricing and Booking */}
              <div className="bg-gray-100 flex items-center justify-between p-4">
                <div>
                  <p className="text-lg font-semibold text-red-600">
                    <del>${trip.Price}</del>
                  </p>
                  <p className="text-lg font-semibold text-green-600">
                    ${calculateDiscountedPrice(trip.Price)}
                  </p>
                  <p className="text-sm text-gray-600">Price per adult</p>
                </div>
                <button className="px-6 py-2 bg-red-500 text-white font-semibold rounded hover:bg-yellow-600" onClick={() => handleTripClick(trip)}>Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TicketCard;
