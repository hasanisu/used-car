import React, { useEffect, useState } from 'react';
import { getAllHonda } from '../../api/cars';
import BrandCard from '../../Component/Card/BrandCard';
import DetailsCard from '../../Component/Card/DetailsCard';

const Honda = () => {
    const [allHondaCars, setAllHondaCars] = useState([])
    useEffect(()=>{
        getAllHonda()
        .then(data => {
            console.log(data)
            setAllHondaCars(data)
        })
    },[])
    return (
        <div>
            <h2>All Honda {allHondaCars.length}</h2>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                {
                    allHondaCars.map(allHonda => <DetailsCard
                    key={allHonda._id}
                    arrival={allHonda}
                    >
                    </DetailsCard>)
                }
            </div>
        </div>
    );
};

export default Honda;