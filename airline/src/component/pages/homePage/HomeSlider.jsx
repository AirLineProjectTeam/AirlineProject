import React from 'react';
import { Carousel } from 'flowbite-react';
import Image1 from "./Assets/Image1.jpg"
import Image2 from "./Assets/Image2.jpg"
import Image3 from "./Assets/Image3.jpg"

function HomeSlider() {
  return (
    <div className="relative h-screen">
      <Carousel
        className="h-full"
        autoPlay={true}
        interval={5000}
        pauseOnHover={true}
      >
        <div className="relative h-full">
          <img
            src={Image1}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid place-items-center bg-black bg-opacity-50">
            <div className="text-center text-white w-3/4 md:w-2/4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              we are here for you.
              Worldwide
              </h1>
              <p className="opacity-80 mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-full">
          <img
            src={Image2}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid place-items-center bg-black bg-opacity-50">
            <div className="text-center text-white w-3/4 md:w-2/4 md:pl-20 lg:pl-32">
              <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
                The Beauty of Nature
              </h1>
              <p className="opacity-80 mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-full">
          <img
            src={Image3}
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid place-items-center bg-black bg-opacity-50">
            <div className="text-center text-white w-3/4 md:w-2/4 md:pl-20 lg:pl-32">
              <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
                The Beauty of Nature
              </h1>
              <p className="opacity-80 mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default HomeSlider;
