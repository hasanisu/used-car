import React, { useEffect } from 'react';
import { getUsedCar } from '../../../api/cars';
import {useLoaderData} from 'react-router-dom';
import DetailsCard from '../../../Component/Card/DetailsCard';

const ReconCarsCategory = () => {
const allUsedCars = useLoaderData();
    return (
        <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {allUsedCars?.map(arrival => <DetailsCard key={arrival._id} arrival={arrival}>

            </DetailsCard>)}
        </div>
    );
};

export default ReconCarsCategory;