import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { reconCarCategories } from '../../api/cars';
import { getImageUrl } from '../../api/imageUpload';
import { AuthContext } from '../../context/AuthProvider';
import AddProductUpdateModal from '../Modal/AddProductUpdateModal';
import {Link} from 'react-router-dom'
import { FaTrashAlt, FaSync } from "react-icons/fa";
import ConfirmationModal from '../Modal/ConfirmationModal';

const TableRow = ({ product, i, handleToUpdateStatus, getPaidStatus, handleToDelete}) => {
    
    const { makerName, modelName, 
        postDate, kilometer, sellingPrice, 
        color, carImage, productStatus, _id, 
        buyingPrice,
        transmission,
        seller,
        sale
    } = product;

    const [deletingCar, setDeletingCar] = useState(null)

    const closeModal =()=>{
        setDeletingCar(null);
      }
    
    
    return (

        <tr className=' uppercase'>
            <td>{i + 1}</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded-xl w-14 h-14">
                            <img src={carImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{makerName}</div>
                        <div className="text-xs opacity-50">{modelName}</div>
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
                <p className="">{buyingPrice}</p>
            </th>
            <th>
                <p className="">{transmission}</p>
            </th>
            <th>
                <p className="">{seller.location}</p>
            </th>
            <th>
                <p className="">{sale}</p>
            </th>
            <th>
                <p className="">{color}</p>
            </th>
            <th>
                <div className=''>
                    <select onChange={getPaidStatus} className="select select-xs select-bordered uppercase w-32 mr-2">
                        <option disabled selected className='text-center'>{productStatus === 'sold' || productStatus === 'add-in-house' ? productStatus : 'in-house'}</option>
                        <option className='btn'>sold</option>
                        <option className='btn'>in-house</option>
                        <option className='btn'>add-in-house</option>
                    </select>
                    <br />
                    <button onClick={() => handleToUpdateStatus(_id)} className="btn btn-xs rounded-full btn-outline btn-primary ml-10 mt-2">UPD</button>

                </div>

            </th>
            <th className='flex justify-center items-center mt-4 gap-3'>


                {/* <label htmlFor="product-update-modal" className="btn btn-xs btn-outline btn-success tooltip" data-tip="Update">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </label> */}

                <Link to={`/dashboard/update-product/${_id}`}>
                <button className="btn btn-xs btn-outline btn-success tooltip mt-2" data-tip="Update">
                <FaSync className='w-4 h-6'/>
                </button>
                </Link>

                {/* <button onClick={()=> handleToDelete(_id)} className="btn btn-sm btn-circle btn-outline btn-error tooltip" data-tip="Delete">
                <FaTrashAlt className='w-5 h-5 ml-1'/>
                </button> */}

                <label onClick={()=>setDeletingCar(product)} htmlFor="my_modal_6" className="btn btn-sm btn-circle btn-outline btn-error tooltip" data-tip="Delete">

                 <FaTrashAlt className='w-5 h-5 ml-1 mt-1'/>
                </label>

            </th>
            {
                deletingCar && 
                <ConfirmationModal
            closeModal={closeModal}
            handleToDelete={handleToDelete}
            modalData={deletingCar}
            title={`Are you sure you want to delete?`}
            message={`If you delete ${deletingCar.makerName} ${deletingCar.modelName}. it cannot be undone.`}
            />
            }
            
        </tr>

    );
};

export default TableRow;