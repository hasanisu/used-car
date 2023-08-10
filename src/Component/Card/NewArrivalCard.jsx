import React from 'react';
import { Link } from 'react-router-dom';

const NewArrivalCard = ({arrival}) => {
    const {title, price, img,kilomter, _id, sale } = arrival;
    return (
        <div className="card shadow-xl image-full">
            <figure><img src={img} alt="Shoes" className='p-2 rounded-3xl'/></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <span>killometer: {kilomter}</span>
                <span>Price: ${price}</span>
                {
                    arrival.sale && 
                    <p>Save {sale}%</p>
    
                }
                <div className="card-actions justify-end">
                    <Link to={`/car-details/${_id}`}><button className="btn btn-xs btn-primary">view Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NewArrivalCard;