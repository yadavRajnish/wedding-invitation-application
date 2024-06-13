import React, { useState, useEffect } from "react";
import firstImage from "../Assest/1st.JPG";
import flower from "../Assest/flower.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS file

const FirstPage = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const targetDate = new Date("April 21, 2028").getTime();  // set the wedding date
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  useEffect(() => {
    AOS.init({
      duration: 3000, // Animation duration
      easing: "ease", // Easing option
    });
  }, []); // Initialize AOS only once

  return (
    <div className="relative" data-aos="fade-right">
      <img
        src={firstImage}
        alt="1st"
        className="h-85 md:h-screen w-screen object-cover"
      />
      <div className="absolute shadow-2xl md:-bottom-[17rem] -bottom-[25rem]  left-1/2 transform -translate-x-1/2 h-[auto] w-[85%] bg-white text-center rounded">
        <div className="m-5">
          <div
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500000"
            className="border border-gray-500 p-4"
          >
            <div className="">
              {/* <h1 className="text-7xl"  style={{ fontFamily: 'Caveat' }}>Save The Date</h1> */}
              <h1 className="text-lg md:text-3xl" style={{ fontFamily: "regular" }}>
                Save The Date
              </h1>
            </div>

            <div className="mt-10 lg:text-9xl md:text-5xl text-5xl">
              <h1 style={{ fontFamily: "Satisfy" }}>
                Manish <span className="block md:inline">&</span> Sushmita
              </h1>
            </div>

            <div>
              <p
                className="mt-6 text-lg text-gray-500 md:text-3xl lg:text-4xl"
                style={{ fontFamily: "Satisfy" }}
              >
                We Are Getting Married April 21, 2024
              </p>
              <p className="text-center flex justify-center mt-4">
                <img
                  src={flower}
                  alt="flower"
                  className="md:h-15 md:w-48 h-12 w-30 lg:h-16 lg:w-40"
                />
              </p>
            </div>
            <table className="mx-auto mt-2 md:mt-8 lg:mt-10">
              <tbody>
                <tr></tr>
                <tr
                  style={{ fontFamily: "Satisfy" }}
                  className="text-3xl md:text-4xl lg:text-5xl "
                >
                  <td className="pr-4 md:pr-12 lg:pr-24">{timeLeft.days}</td>
                  <td className="pr-4 md:pr-12 lg:pr-24">{timeLeft.hours}</td>
                  <td className="pr-4 md:pr-12 lg:pr-24">{timeLeft.minutes}</td>
                  <td className="">{timeLeft.seconds}</td>
                </tr>
                <tr className="">
                  <td className="pr-4 md:pr-12 lg:pr-24">Days</td>
                  <td className="pr-4 md:pr-12 lg:pr-24">Hours</td>
                  <td className="pr-4 md:pr-12 lg:pr-24">Minutes</td>
                  <td className="">Seconds</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FirstPage;
