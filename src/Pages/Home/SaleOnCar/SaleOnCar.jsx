import React, { useEffect, useState } from 'react';
import MainLoader from '../../../Component/Loader/MainLoader';
import HomeCart from '../../../Component/Card/HomeCart';


const SaleOnCar = () => {
    const [loading, setLoading] = useState(true)
    const [saleOffer, setSaleOffer ] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/car-sale')
        .then(res => res.json())
        .then(data => {
            setLoading(false)
            setSaleOffer(data)
        })
    },[])
    return (
        <div>
            {
                loading? <MainLoader/> :
                <div className='mt-10'>
            <div className='flex justify-between'>
                <div className='flex'>
                    <h5 className='text-white bg-lime-600 font-sm rounded-md px-2 py-1 flex justify-center items-center mr-2'>SALE</h5>
                    <h2 className='text-2xl font-bold'>Clearance</h2>
                </div>
                <button className="btn btn-sm btn-outline btn-primary">Select More</button>
            </div>

            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 '>
                {
                    saleOffer.map(promotion => <HomeCart
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

export default SaleOnCar;