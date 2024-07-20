import React, { useEffect, useState } from "react";
import axios from "axios";

function AllTicketDash() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get('https://api.example.com/tickets'); // Replace with your API endpoint
        if (response.data) {
          setTrips(response.data); // Assuming response.data is an array of trips
        }
      } catch (error) {
        console.error('Error fetching trips:', error);
      }
    };

    fetchTrips();
  }, []);

  return (
    <div className="flex gap-4">
      

      <div className="bg-white shadow-md rounded-lg p-4 mb-4 mx-10 h-[300px] m-10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold">Ticket Details</h2>
            <p className="text-gray-500">Flight Ticket Information</p>
          </div>
          <div className="flex gap-2">
            <button className="text-blue-500 hover:text-blue-700 px-2 py-1 border border-blue-500 rounded-md">Edit</button>
            <button className="text-red-500 hover:text-red-700 px-2 py-1 border border-red-500 rounded-md">Delete</button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p><span className="font-semibold">From:</span> New York</p>
            <p><span className="font-semibold">To:</span> London</p>
            <p><span className="font-semibold">Departure Date:</span> 2024-07-21</p>
            <p><span className="font-semibold">Flight Number:</span> ABC123</p>
          </div>
          <div>
            <p><span className="font-semibold">Economy Price:</span> $500</p>
            <p><span className="font-semibold">VIP Price:</span> $1000</p>
            <p><span className="font-semibold">Available Seats:</span> 100</p>
            <p><span className="font-semibold">Reserved ECO:</span> 20</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllTicketDash;
