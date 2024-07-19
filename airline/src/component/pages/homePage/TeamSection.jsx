import React from 'react';
import Pilot from "./Assets/Pilot1.jpg"


const TeamSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-200 to-red-200 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Dedicated Team</h2>
        <p className="text-gray-600 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded overflow-hidden shadow-lg">
          <img className="w-40 h-40 mx-auto rounded-full bg-red-300 p-1" src={Pilot} alt="Pilot" />
          <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Captain John Doe</h3>
              <p className="text-gray-600">Lead Pilot</p>
            </div>
          </div>
          <div className="bg-white rounded overflow-hidden shadow-lg">
          <img className="w-40 h-40 mx-auto rounded-full bg-red-300 p-1" src={Pilot} alt="Pilot" />
          <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Jane Smith</h3>
              <p className="text-gray-600">Chief Flight Attendant</p>
            </div>
          </div>
          <div className="bg-white rounded overflow-hidden shadow-lg">
          <img className="w-40 h-40 mx-auto rounded-full bg-red-300 p-1" src={Pilot} alt="Pilot" />
          <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Michael Johnson</h3>
              <p className="text-gray-600">Ground Operations Manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
