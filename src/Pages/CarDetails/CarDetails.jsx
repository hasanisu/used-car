import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CarDetails = () => {
    const detailsCar= useLoaderData();
    console.log(detailsCar);
    return (
        <div>
            <h2>This is car details</h2>
        </div>
    );
};

export default CarDetails;