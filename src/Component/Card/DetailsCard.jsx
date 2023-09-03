import React from 'react';
import { Link } from 'react-router-dom';

const DetailsCard = ({ arrival }) => {
    const { modelName, makerName, sellingPrice, carImage, kilometer, _id, sale } = arrival;
    return (
        //         <div className="card shadow-xl image-full">
        //             <figure><img src={img} alt="Shoes" className='p-2 rounded-3xl' /></figure>
        //             <div className="card-body">
        //                 <h2 className="card-title">{brand_name}</h2>
        //                 <span>kilometer: {kilometer}</span>
        //                 <span>Price: ${price}</span>
        //                 {
        //                     arrival.sale > 0 &&
        //                     <p>Save {sale}%</p>

        //                 }
        //                 <div className="card-actions justify-end">
        //                     <Link to={`/car-details/${_id}`}><button className="btn btn-xs btn-primary">view Details</button></Link>
        //                 </div>
        //             </div>
        //         </div>
        <div className="card bg-red-400 shadow-xl">
            {
                carImage ?
                    <figure><img src={carImage} alt="" className='w-full border-0' /></figure>
                    :
                    <figure><h2 className='text-2xl h-52 flex justify-center items-center'>No Image Preview</h2></figure>
            }
            <div className="card-body">
                <h2 className="card-title text-gray-800">
                   MakerName: {makerName} {modelName}
                </h2>
                <p>price: ¥{sellingPrice}</p>
                <span>kilometer: {kilometer}</span>
                {
                    arrival.sale > 0 &&
                    <p>Save {sale}%</p>

                }
                <div className="card-actions justify-end">
                    <Link to={`/car-details/${_id}`}><button className="btn btn-xs btn-primary">View Details</button></Link>
                    <Link to={`/car-details/${_id}`}><button className="btn btn-xs btn-primary">Buy Now</button></Link>

                </div>
            </div>
        </div>

    );
};

export default DetailsCard;