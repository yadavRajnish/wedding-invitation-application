import React from "react";
import coupleGo from "../Assest/couplego.JPG";

const Form = () => {
  return (
    <div className="md:mx-40 my-5" >
      <div className="md:flex md:w-[90%] w-full justify-center items-center">
        <div className="w-full md:w-3/5 lg:w-2/3 xl:w-1/2" data-aos="fade-left">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold pt-3">Are You Attending?</h1>
          </div>
          <form
            action="https://formspree.io/f/moqorljy"
            method="POST"
            className="px-4 py-4  rounded-lg "
            
          >
            <div className="mb-4 border-b-2">
              <input
                type="text"
                name="name"
                className="form-input w-full px-4 py-3 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none"
                placeholder="Name"
                autoComplete="off"
                required
              />
            </div>
            <div className="mb-4 border-b-2">
              <input
                type="email"
                name="Email"
                className="form-input w-full px-4 py-3 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none"
                placeholder="Email"
                autoComplete="off"
                required
              />
            </div>
            <div className="mb-4">
              <div>
                <label className="inline-flex items-center mr-4">
                  <input
                    type="radio"
                    name="rsvp"
                    value="Yes, I will be there"
                    className="form-radio text-blue-500 focus:ring-blue-400"
                    required
                  />
                  <span className="ml-2">Yes, I will be there</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="rsvp"
                    value="Sorry, I can’t come"
                    className="form-radio text-blue-500 focus:ring-blue-400"
                    required
                  />
                  <span className="ml-2">Sorry, I can't come</span>
                </label>
              </div>
            </div>
            <div className="mb-4 border-b-2">
              <input
                type="number"
                name="numberOfGuests"
                className="form-input w-full px-4 py-3 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none"
                placeholder="Number of Guests"
                autoComplete="off"
                required
              />
            </div>
            <div className="mb-4 border-b-2">
              <textarea
                name="message"
                className="form-textarea w-full px-4 py-3 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none"
                placeholder="Your Message"
                rows="2"
                autoComplete="off"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
        <div className="hidden md:block md:w-2/5 lg:w-1/3 xl:w-1/4">
          <img src={coupleGo} alt="" className="h-full w-full " />
        </div>
      </div>
    </div>
  );
};

export default Form;
