import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const services = useLoaderData();
    return (
        <div>
            <h2>{services.title}</h2>
        </div>
    );
};

export default Checkout;