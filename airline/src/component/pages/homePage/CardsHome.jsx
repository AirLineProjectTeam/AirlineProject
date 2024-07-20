import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from "./Assets/Image1.jpg"

function CardsHome() {
  const [trips, setTrips] = useState([]);
  const [lowestPrice, setLowestPrice] = useState(null);

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
        }
      } catch (error) {
        console.error('Error fetching trips:', error);
      }
    };

    fetchTrips();
  }, []);

  const handleTripClick = (trip)=>{
    trips.map(()=>{
        sessionStorage.setItem('trip', JSON.stringify(trip));
        console.log(trip)
    })
    

  }  

  

  return (
    <div className='bg-lightBlue p-20 pb-'>
      <div className="mt-10 sm:mt-40 text-center mb-6 sm:mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Cheap flights selected for you</h1>
        <h4 className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">{trips.length} routes in your area</h4>
        {lowestPrice && (
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">Lowest price: ${lowestPrice}</p>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-4 sm:mt-0">
        {trips.map(trip => (
          <div key={trip.id} className="max-w-2xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <div className="relative">
                <img className="rounded-t-lg h-48 object-cover w-[] sm:w-[400px]" src={Image} alt={trip.description} />
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>
              <div className="p-4">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${trip.price}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">To: {trip.from}</p>
                <a href="#" onClick={() => handleTripClick(trip)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
               Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </a>

              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsHome;
