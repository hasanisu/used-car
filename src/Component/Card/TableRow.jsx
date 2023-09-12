import React from 'react';

const TableRow = ({ product, handleRequest, getPaidStatus }) => {
    const { makerName, modelName, postDate, kilometer, sellingPrice, color, carImage, productStatus, _id } = product;
    return (

        <tr>
            <td></td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded-xl w-14 h-14">
                            <img src={carImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{makerName}</div>
                        <div className="text-sm opacity-50">{modelName}</div>
                    </div>
                </div>
            </td>
            <td>
                <span className="badge badge-ghost badge-sm">{postDate}</span>
            </td>
            <td>{kilometer}</td>
            <th>
                <p className="">{sellingPrice}</p>
            </th>
            <th>
                <p className="">{color}</p>
            </th>
            <th>
                <div>
                    <select onChange={getPaidStatus}  className="select select-bordered uppercase w-32 mr-2">
                        <option disabled selected className='text-center'>{productStatus === 'sold' || productStatus === 'add-in-house' ? productStatus : 'in-house'}</option>
                        <option className='btn'>sold</option>
                        <option className='btn'>in-house</option>
                        <option className='btn'>add-in-house</option>
                    </select>
                    <button onClick={()=> handleRequest(_id)} className="btn btn-xs rounded-full btn-outline btn-primary">Add</button>
            
                </div>

            </th>
            <th>
                <button className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
        </tr>

    );
};

export default TableRow;