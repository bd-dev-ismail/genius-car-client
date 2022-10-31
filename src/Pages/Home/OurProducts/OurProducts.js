import React, { useEffect, useState } from 'react';
import SingleProdcuts from './SingleProdcuts';

const OurProducts = () => {
  const [products , setProducts] = useState([]);
  useEffect(()=>{
    fetch('products.json')
    .then(res=> res.json())
    .then(data => setProducts(data))
  },[])
    return (
      <div className="my-32">
        <div className="text-center mb-4">
          <p className="text-2xl font-bold text-orange-600">Popular Products</p>
          <h2 className="text-5xl font-semibold">Browse Our Products</h2>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br /> words which don't look even slightly
            believable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((productSingle) => (
            <SingleProdcuts
              productSingle={productSingle}
              key={productSingle._id}
            ></SingleProdcuts>
          ))}
        </div>
      </div>
    );
};

export default OurProducts;