import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const PurchaseRow = ({purchaseCar, i}) => {
    console.log(purchaseCar)
    const {carImage, buyingPrice, modelName, makerName, _id, transactionId, paid, purchaseDate} = purchaseCar;
    return (
        
       
       <tr>
        <th>{i+1}</th>
        <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={carImage} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
        </td>
        <td>{_id}</td>
        <td className='uppercase'>{makerName}-{modelName}</td>
        <td>¥{buyingPrice}</td>
        <td>{transactionId}</td>
        <td>  
        
        {purchaseDate}
               
         </td>
        <td>
            <Link to={`/car-details/${_id}`}>
            <button className='btn btn-xs btn-primary'>View Details</button>
            </Link>
        </td>
        <td className='text-green-600 font-semibold text-lg'>
            {paid  && 'PAID'}
        </td>
      </tr>
        
    );
};

export default PurchaseRow;