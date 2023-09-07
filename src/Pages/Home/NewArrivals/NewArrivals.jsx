import React, { useEffect, useState } from 'react';
import MainLoader from '../../../Component/Loader/MainLoader';
import HomeCart from '../../../Component/Card/HomeCart';


const NewArrivals = () => {
    const [loading, setLoading] = useState(true)
    const [newArrival, setNewArrival ] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/new-arrivals')
        .then(res => res.json())
        .then(data => {
            setLoading(false)
            setNewArrival(data)
            
        })
    },[])
    return (
        <div>
            {
                loading ? <MainLoader/> :

                <div className='mt-10'>
            <div className='flex justify-between'>
                <div className='flex'>
                    <p className='text-white bg-red-600 font-sm rounded-md px-2 py-1 flex justify-center items-center mr-2'>NEW</p>
                    <h2 className='text-2xl font-bold'>New Arrivals</h2>
                </div>
                <button className="btn btn-sm btn-outline btn-primary">Select More</button>
            </div>

            <div className='grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-10 '>
                {
                    newArrival.map(promotion => <HomeCart
                    key={promotion._id}
                    promotion={promotion}

                    >

                    </HomeCart>)
                }
            </div>


        </div>
            }
        </div>
    );
};

export default NewArrivals;