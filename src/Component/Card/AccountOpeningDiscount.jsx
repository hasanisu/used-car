import React from 'react';
import { FaPercent, FaSearch, FaRegHeart } from "react-icons/fa";
import {Link} from 'react-router-dom';

const AccountOpeningDiscount = () => {
    return (
        <div className="card w-72 bg-base-400 shadow-xl mt-20">
            <div className="card-body bg-lime-700">
                <h2 className="text-3xl text-center">Create Account</h2>
                <div className='flex'>
                    <FaPercent className=' w-8 h-7 p-1 mr-2 bg-green-500 rounded-full' />
                    <p className='text-lg'>Get up to ¥500 discount</p>
                </div>
                <div className='flex'>
                    <FaSearch className=' w-10 h-7 p-1 mr-2 bg-green-500 rounded-full' />
                    <p className='text-xl'>Check your orders, invoice, inquiry</p>
                </div>
                <div className='flex'>
                    <FaRegHeart className=' w-8 h-7 p-1 mr-2 bg-green-500 rounded-full' />
                    <p className='text-xl'>Save your favorite wish list</p>
                </div>
                <div className="card-actions">
                    <Link to='/login' className='w-full'><button className="btn btn-primary w-full">Create Account</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AccountOpeningDiscount;