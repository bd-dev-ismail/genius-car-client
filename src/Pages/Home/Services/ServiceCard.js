import React from 'react';
import { FaArrowRight,  } from "react-icons/fa";
import { Link } from 'react-router-dom';
const ServiceCard = ({service}) => {
    const { img, price, title, _id } = service;
    return (
      <div className="card card-compact w-96 bg-base-100 shadow-xl p-4">
        <figure>
          <img src={img} alt="Shoes" className="rounded h-[230px]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <div className="card-actions justify-end">
            <p className="text-2xl text-orange-600 font-semibold">
              Price ${price}
            </p>
            <Link to={`/checkout/${_id}`}>
              <button className="btn btn-link text-orange-600  cursor-pointer">
                Checkout
                <FaArrowRight className="text-orange-600" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;