import React from "react";
import haldi from "../Assest/haldi.jpg";
import wedding from "../Assest/wedding.jpg";
import mehandi from "../Assest/mehandi.jpg";

const ThirdPage = () => {
  return (
    <div className="mt-5">
      <h1 className="text-2xl font-bold mb-3">Auspicious Program</h1>

      <div className="md:flex text-center items-center">
        <div className="w-full md:w-1/3 p-2" data-aos="zoom-in-right">
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src={haldi} alt="Haldi" className="w-full h-auto" />
            <div className="mt-4">
              <p className="text-lg font-semibold">Haldi ceremony</p>
              <p className="text-sm text-gray-600">Friday, April 19, 2024</p>
              <p className="text-sm text-gray-600">Evening</p>
            </div>
          </div>
        </div>
        <div
          className="w-full md:w-1/3 p-2"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src={mehandi} alt="Mehandi" className="w-full h-auto" />
            <div className="mt-4">
              <p className="text-lg font-semibold">Mehndi ceremony</p>
              <p className="text-sm text-gray-600">Saturday, April 20, 2024</p>
              <p className="text-sm text-gray-600">Evening</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-2" data-aos="zoom-in-left">
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src={wedding} alt="Wedding" className="w-full h-auto" />
            <div className="mt-4">
              <p className="text-lg font-semibold">Wedding</p>
              <p className="text-sm text-gray-600">Sunday, April 21, 2024</p>
              <p className="text-sm text-gray-600">Night</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
