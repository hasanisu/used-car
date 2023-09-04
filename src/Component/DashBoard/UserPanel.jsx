import React from 'react';
import { Link } from 'react-router-dom';
import { FaBell } from "react-icons/fa";

const UserPanel = () => {
    return (
        <div>
             <li>
                <Link to='my-wishlist'>Wish-list <FaBell className=' text-orange-400'/></Link>               
              </li>
              <li>
                <Link to='become-a-seller'>Become a Seller</Link>
              </li>
              <li>
                <Link>Purchase History</Link>
              </li>
        </div>
    );
};

export default UserPanel;