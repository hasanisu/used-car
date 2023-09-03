import React from 'react';
import { Link } from 'react-router-dom';

const HostPanel = () => {
    return (
        <div>
            <li><Link to="add-product">Add Product</Link></li>
            <li><Link >All Sold Products</Link></li>
            <li><Link>Remaining Products</Link></li>
            <li><Link to='my-product'>My Products</Link></li>
        </div>
        
        
    );
};

export default HostPanel;