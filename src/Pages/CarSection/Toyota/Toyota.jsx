import React, { useEffect, useState } from 'react';
import { getAllToyota } from '../../../api/cars';
import DetailsCard from '../../../Component/Card/DetailsCard';

const Toyota = () => {
    const [modelType, setModelType] = useState([])
    
    useEffect(()=>{
        getAllToyota()
        .then(data => {
            setModelType(data)
            console.log(data)})
    },[])
   

    return (
        <div>
            <h2>this is toyota {}</h2>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                {
                    modelType.map(type => <DetailsCard
                    key={type._id}
                    arrival={type}
                    >
                    </DetailsCard>)
                }
            </div>
        </div>
    );
};

export default Toyota;