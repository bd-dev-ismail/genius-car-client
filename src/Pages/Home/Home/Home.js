import React from 'react';
import { Helmet } from 'react-helmet';
import About from '../About/About';
import AddressInfo from '../AddressInfo/AddressInfo';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

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
        </div>
    );
};

export default Home;