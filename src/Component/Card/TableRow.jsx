import React from 'react';

const TableRow = ({ product }) => {
    const { makerName, modelName, postDate, kilometer, sellingPrice, color, carImage } = product;
    console.log(product)
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
                <select className="btn btn-xs btn-primary select w-32">
                    <option disabled selected>Status</option>
                    <option className='btn'>Sold</option>
                    <option className='btn'>Available</option>
                </select>
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