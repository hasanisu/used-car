import React from 'react';
import { Link } from 'react-router-dom';

const UserPanel = () => {
    return (
        <div>
             <li>
                <Link>My Favorite List items</Link>
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