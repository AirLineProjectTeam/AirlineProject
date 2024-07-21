import React from "react";
import Pilot from "./Assets/Pilot1.jpg";

const TeamSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-200 to-red-200 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Meet Our Dedicated Team
        </h2>
        <p className="text-gray-600 mb-12">
          Our team of experienced professionals is committed to providing you
          with the best travel experience. Get to know the people who make your
          journey safe and enjoyable.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img
              className="w-40 h-40 mx-auto rounded-full p-1"
              src="https://aerocrewnews.com/wp-content/uploads/2023/09/Kenneth-Kirkpatrick-United-Military-Pilot-Program-1024x682.jpg"
              alt="Captain John Doe"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Captain John Doe
              </h3>
              <p className="text-gray-600">Lead Pilot</p>
              <p className="text-gray-600 mt-2">
                With over 20 years of experience, Captain John ensures a smooth
                and safe journey for all our passengers.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img
              className="w-40 h-40 mx-auto rounded-full p-1"
              src="https://img.freepik.com/premium-photo/happy-chief-stewardess-is-proud-her-flight-attendants-team-near-passenger-airplane_153608-10557.jpg"
              alt="Jane Smith"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Jane Smith
              </h3>
              <p className="text-gray-600">Chief Flight Attendant</p>
              <p className="text-gray-600 mt-2">
                Jane leads our cabin crew with a focus on exceptional customer
                service and passenger comfort.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img
              className="w-40 h-40 mx-auto rounded-full p-1"
              src="https://www.traveldailynews.com/wp-content/uploads/2023/01/54959-400x265.jpg"
              alt="Michael Johnson"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Michael Johnson
              </h3>
              <p className="text-gray-600">Ground Operations Manager</p>
              <p className="text-gray-600 mt-2">
                Michael ensures that everything on the ground runs smoothly,
                coordinating all aspects of airport operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
