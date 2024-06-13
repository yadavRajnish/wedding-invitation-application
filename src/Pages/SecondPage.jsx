import React from "react";
import men from "../Assest/couple-man.svg";
import women from "../Assest/couple-women.svg";
import couple from "../Assest/2nd.JPG";
import coupleFlower from "../Assest/couple-flower.png";

const SecondPage = () => {
  return (
    <div className="lg:mt-[280px] mt-[430px] md:mt-[280px] md:flex justify-center items-center">
      <div className="flex flex-col items-center md:mr-8" data-aos="fade-down-right">
        <img src={men} alt="men" className="md:w-32 md:h-32" />
        <h1 className="text-3xl">Manish</h1>
        <p>S/o Mr. Chhatthuram Yadav</p>
        <p className="mt-4 text-lg">Two hearts, one journey; together, forever</p>
      </div>

      <div className="relative my-8 flex justify-center" data-aos="zoom-in">
        <div className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] overflow-hidden rounded-full flex justify-center items-center shadow-gray-600-3xl">
          <img
            src={couple}
            alt="couple"
            className="w-full h-auto transform scale-125 md:scale-150"
          />
        </div>
        <img
          src={coupleFlower}
          alt="coupleFlower"
          className="absolute -bottom-9 left-1/2 transform -translate-x-1/2 w-80 md:w-80 h-auto"
        />
      </div>

      <div className="flex flex-col items-center md:ml-8 mt-3" data-aos="fade-down-left">
        <img src={women} alt="women" className="md:w-32 md:h-32" />
        <h1 className="text-3xl">Sushmita</h1>
        <p>D/o Mr. Balchandra Yadav</p>
        <p className="mt-4 text-lg">Love brought us together, and together,<br/> we'll write our story</p>
      </div>
    </div>
  );
};

export default SecondPage;
