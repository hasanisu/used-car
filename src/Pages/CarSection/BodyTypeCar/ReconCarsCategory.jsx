import React, { useEffect } from 'react';
import { getUsedCar } from '../../../api/cars';
import { useLoaderData } from 'react-router-dom';
import DetailsCard from '../../../Component/Card/DetailsCard';

const ReconCarsCategory = () => {
    const allUsedCars = useLoaderData();
    console.log('length', allUsedCars.length)
    return (
        <div className=' bg-slate-700 rounded-lg min-h-full'>
            <h2 className='text-center text-4xl mb-16'>Car-Market</h2>
            {
                allUsedCars?.length ?
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4'>
                {allUsedCars?.map(arrival => <DetailsCard key={arrival._id} arrival={arrival}>

                </DetailsCard>)}
            </div>
            :
            <div className='flex justify-center items-center '>
                <h2 className='mt-32 text-4xl text-red-400'>No Data Found</h2>
            </div>
            }
        </div>
    );
};

export default ReconCarsCategory;