import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [isAsc, setIsAsc] = useState(true);
    const searchRef = useRef();
   const [search, setSearch] = useState('');
    useEffect(()=>{
        fetch(`http://localhost:5000/services?search=${search}&order=${isAsc ? 'asc' : 'desc'}`)
          .then((res) => res.json())
          .then((data) => setServices(data));
    },[isAsc, search])
    // console.log(services);
   const handalSearch = ()=>{
    setSearch(searchRef.current.value);
   }
    return (
      <div>
        <div className="text-center mb-4">
          <p className="text-2xl font-bold text-orange-600">Services</p>
          <h2 className="text-5xl font-semibold">Our Service Area</h2>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br /> words which don't look even slightly
            believable.{" "}
          </p>
        </div>

        <div className="flex items-center justify-between ">
          <div className="flex items-center">
            <p className="font-semibold mr-3">Click to change Price Range: </p>
            <button
              className="btn btn-sm btn-secondary"
              onClick={() => setIsAsc(!isAsc)}
            >
              {isAsc ? "Low To Hight" : "High To Low"}
            </button>
          </div>
          <div>
            <label className="font-semibold mr-3">Search By Service Name</label>
            <input
              ref={searchRef}
              type="text"
              className="input input-bordered"
            />{" "}
            <button onClick={handalSearch} className="btn btn-warning ">Search</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 ">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
        <div className="text-center my-5">
          <button className="btn btn-error">More Services</button>
        </div>
      </div>
    );
};

export default Services;