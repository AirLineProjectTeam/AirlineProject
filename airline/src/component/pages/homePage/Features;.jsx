import React from 'react';

const Features = () => {
  return (
    <section className=" py-12 pt-40">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-lg ">
            <div className="flex justify-center mb-4">
              <div className="bg-pink-500 rounded-full p-4">
                {/* Add an appropriate airline-related icon here */}
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 16V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2zM10 12H6m0 0l4-4m-4 4l4 4"></path></svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">24/7 Support</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet conse adipiscing elit.</p>
          </div>
          <div className="p-6 bg-white rounded-lg ">
            <div className="flex justify-center mb-4">
              <div className="bg-green-500 rounded-full p-4">
                {/* Add an appropriate airline-related icon here */}
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7h.01M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4c.5 0 .98-.09 1.42-.26m-1.42-3.74h.01M12 12h.01m4.42 1.26A4 4 0 1116 12h0-1a4.011 4.011 0 01-4.42 3.74M4 4l16 16"></path></svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Take Ownership</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet conse adipiscing elit.</p>
          </div>
          <div className="p-6 bg-white rounded-lg ">
            <div className="flex justify-center mb-4">
              <div className="bg-orange-500 rounded-full p-4">
                {/* Add an appropriate airline-related icon here */}
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-4-4"></path></svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Team Work</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet conse adipiscing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
