import React from 'react';
import { Link } from 'react-router-dom';
import { FaBell } from "react-icons/fa";
import useCart from '../../hooks/useCart';

const HostPanel = () => {
    const [userCart] = useCart();
    return (
        <div>
            <li>
                <Link to='my-wishlist'>
                  <h2>MY-WISHLIST</h2> 
                  <div className='flex'>
                  <FaBell className='text-orange-400 mt-1'/>
                  <p className='-mt-3 bg-red-500 w-6 h-6 pl-1  rounded-full'>+{userCart?.length}</p>
                  
                  </div>
                
                </Link>               
              </li>
            <li><Link to="add-product">Add Product</Link></li>
            <li><Link >All Sold Products</Link></li>
            <li><Link>Remaining Products</Link></li>
            <li><Link to='my-product'>My Products</Link></li>
        </div>
        
        
    );
};

export default HostPanel;