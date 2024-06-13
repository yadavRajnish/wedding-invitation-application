import React from "react";

const Location = () => {
  return (
    <div className="mt-5 text-center">
      <h1 className="text-2xl font-bold mb-3">Location</h1>

      <div className="flex flex-col md:flex-row justify-center items-center md:px-40">
        <div className="w-full md:w-84 p-4 mb-8 md:mb-0 md:mr-4" data-aos="fade-left">
          <h2 className="text-xl font-semibold mb-2">Groom's Location</h2>
          <div className="bg-white rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d898.7497291702748!2d82.58258820909828!3d25.704459894836212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39903ddddaf25fe5%3A0x58e81e4ca8f65c7d!2sChaura%20mata!5e0!3m2!1sen!2sin!4v1709359660780!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              title="Groom's Location"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="p-4">
              <p>Mr. Chhatthuram Yadav</p>
              <p>Village → Fattupur (Bhimpur)</p>
              <p>Post → Ajoshi</p>
              <p>District → Jaunpur</p>
              <p>State → Uttar Pradesh</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-84 p-4" data-aos="fade-right">
          <h2 className="text-xl font-semibold mb-2">Bride's Location</h2>
          <div className="bg-white rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.0533577840047!2d83.16699763716682!3d25.920356797618002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991bf2c65fb57d3%3A0x5cb2c52c9e87b17!2sChak%20Kathwari%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1709361338617!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              title="Bride's Location"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="p-4">
              <p>Mr. Balchandra Yadav</p>
              <p>Village → Chak Kathwari</p>
              <p>Block / Tehsil → Mehnagar</p>
              <p>District → Azamgarh</p>
              <p>State → Uttar Pradesh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
