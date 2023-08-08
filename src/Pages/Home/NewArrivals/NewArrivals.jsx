import React, { useEffect, useState } from 'react';
import NewArrivalCard from '../../../Component/Card/NewArrivalCard';

const NewArrivals = () => {
    const [newArrival, setNewArrival ] = useState([])
    useEffect(()=>{
        fetch('arrival.json')
        .then(res => res.json())
        .then(data => setNewArrival(data))
    },[])
    return (
        <div className='mt-10'>
            <div className='flex justify-between'>
                <div className='flex'>
                    <p className='text-white bg-red-600 font-sm rounded-md px-2 py-1 flex justify-center items-center mr-2'>NEW</p>
                    <h2 className='text-2xl font-bold'>New Arrivals</h2>
                </div>
                <button className="btn btn-sm btn-outline btn-primary">Select More</button>
            </div>

            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 '>
                {
                    newArrival.map(arrival => <NewArrivalCard
                    key={arrival._id}
                    arrival={arrival}

                    >

                    </NewArrivalCard>)
                }
            </div>


        </div>
    );
};

export default NewArrivals;