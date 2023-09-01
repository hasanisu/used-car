import React from 'react';
import { Link } from 'react-router-dom';

const HostPanel = () => {
    return (
        <div>
            <li><Link to="add-product">Add Product</Link></li>
            <li><Link to='all-product'>All Sold Products</Link></li>
            <li><Link>Remaining Products</Link></li>
            <li><Link>All Products</Link></li>
        </div>
        
        
    );
};

export default HostPanel;