import React from 'react';
import { FaStar, IconName } from "react-icons/fa";
const SingleProdcuts = ({ productSingle }) => {
  const { img, product } = productSingle;
  return (
    <div className="card w-96 bg-base-100 shadow-xl hover:border-yellow-500 border-orange-500 border-2">
      <figure className="px-10 pt-10">
        <img src={img} alt="Products" className="rounded-xl h-56" />
      </figure>
      <div className="card-body items-center text-center">
        <div className='flex text-yellow-500'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
        </div>
        <h2 className="card-title">{product}</h2>

        <div className="card-actions">
         <p className="text-xl text-orange-600">$20.00</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProdcuts;