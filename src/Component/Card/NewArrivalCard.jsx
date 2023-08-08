import React from 'react';
import { Link } from 'react-router-dom';

const NewArrivalCard = ({arrival}) => {
    const {title, price, img,kilomter, _id } = arrival;
    return (
        <div className="card w-72 bg-base-100 shadow-xl image-full">
            <figure><img src={img} alt="Shoes" className='w-96'/></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <span>killometer: {kilomter}</span>
                <span>Price: ${price}</span>
                <div className="card-actions justify-end">
                    <Link to={`/car-details/${_id}`}><button className="btn btn-primary">view Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NewArrivalCard;