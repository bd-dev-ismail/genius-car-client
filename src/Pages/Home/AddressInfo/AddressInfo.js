import React from 'react';
import { FaBusinessTime, FaLocationArrow, FaPhoneVolume } from 'react-icons/fa';

const AddressInfo = () => {
    return (
      <div className="flex justify-around items-center bg-black mb-5 h-64 text-white">
        <div className="flex">
          <FaBusinessTime
            style={{ fontSize: "40px" }}
            className="text-orange-600"
          />
          <div className="pl-5">
            <p>We are open monday-friday</p>
            <p className="text-xl font-bold">7:00 am - 9:00 pm</p>
          </div>
        </div>
        <div className="flex">
          <FaPhoneVolume
            style={{ fontSize: "40px" }}
            className="text-orange-600"
          />
          <div className="pl-5">
            <p>Have a question? </p>
            <p className="text-xl font-bold">+2546 251 2658</p>
          </div>
        </div>
        <div className="flex">
          <FaLocationArrow
            style={{ fontSize: "40px" }}
            className="text-orange-600"
          />
          <div className="pl-5">
            <p>Need Repair? our address.</p>
            <p className="text-xl font-bold">Liza Street, New York</p>
          </div>
        </div>
      </div>
    );
};

export default AddressInfo;