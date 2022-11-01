import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import About from '../About/About';
import AddressInfo from '../AddressInfo/AddressInfo';
import Banner from '../Banner/Banner';
import OurProducts from '../OurProducts/OurProducts';
import Services from '../Services/Services';
import Team from '../Team/Team';

const Home = () => {
  useEffect(()=>{
   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  },[])
    return (
        <div>
          <Helmet>
            <title>Home -Genius Car</title>
          </Helmet>
          <Banner></Banner>
          <About></About>
          <Services></Services>
          <AddressInfo></AddressInfo>
          <OurProducts></OurProducts>
          <Team></Team>
        </div>
    );
};

export default Home;