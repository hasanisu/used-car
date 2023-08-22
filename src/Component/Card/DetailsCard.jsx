import React from 'react';
import { Link } from 'react-router-dom';

const DetailsCard = ({arrival}) => {
    const {brand_name, price, img,kilometer, _id, sale } = arrival;
    return (
        <div className="card shadow-xl image-full">
            <figure><img src={img} alt="Shoes" className='p-2 rounded-3xl'/></figure>
            <div className="card-body">
                <h2 className="card-title">{brand_name}</h2>
                <span>kilometer: {kilometer}</span>
                <span>Price: ${price}</span>
                {
                    arrival.sale > 0 && 
                    <p>Save {sale}%</p>
    
                }
                <div className="card-actions justify-end">
                    <Link to={`/car-details/${_id}`}><button className="btn btn-xs btn-primary">view Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;