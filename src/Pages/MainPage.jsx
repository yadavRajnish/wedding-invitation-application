import React from "react";
import ganesh from "../Assest/ganesh.png";

const MainPage = () => {
  return (
    <div className="text-center flex flex-col items-center  mt-4 ">
      <img src={ganesh} alt="ganesh" className="h-28 w-28" />
      <h1 className="mt-1 font-bold text-1xl">श्री गणेशाय नमः</h1>
    </div>
  );
};

export default MainPage;
