import React, { useState, useEffect } from 'react';

function MyLocation() {
    
  const [position, setPosition] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, []);

  // Constructing the Google Maps iframe URL dynamically
  const mapUrl = `https://maps.google.com/maps?q=${position.latitude},${position.longitude}&z=14&output=embed`;

  return (
    <div className="max-w-screen mx-auto from-red-300 to-purple-100 shadow-md rounded-lg overflow-hidden flex mt-10">
      <div className="p-4 w-1/2">
        <h2 className="text-xl font-semibold mb-2">My Current Location</h2>
        {position.latitude && position.longitude ? (
          <div>
            <p className="text-gray-800">
              Latitude: {position.latitude}, Longitude: {position.longitude}
            </p>
          </div>
        ) : (
          <p className="text-gray-800">Loading...</p>
        )}
      </div>
      {position.latitude && position.longitude && (
        <div className="w-1/2">
          <iframe
            width="100%"
            height="300"
            src={mapUrl}
            title="Google Maps"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default MyLocation;
