import React from 'react';
import { Helmet } from 'react-helmet';
import About from '../About/About';
import AddressInfo from '../AddressInfo/AddressInfo';
import Banner from '../Banner/Banner';
import OurProducts from '../OurProducts/OurProducts';
import Services from '../Services/Services';
import Team from '../Team/Team';

const Home = () => {
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