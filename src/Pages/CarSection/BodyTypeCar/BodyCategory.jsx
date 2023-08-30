import React from 'react';
import { useEffect } from 'react';
import {Link, useLoaderData} from 'react-router-dom'
import { getUsedCar } from '../../../api/cars';


const BodyCategory = ({type}) => {
    useEffect(()=>{
        getUsedCar(type.category_id)
        .then(data =>{
            console.log(data)
        })
    },[type])
    return (
        <div>
            
            <li>
                <Link to={`/category/${type.category_id}`}>
                {type.categoryName}
                <hr className='border-red-500'/> 
                </Link>    
            </li>
            
        </div>
    );
};

export default BodyCategory;