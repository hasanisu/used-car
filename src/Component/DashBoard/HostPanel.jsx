import React from 'react';
import { Link } from 'react-router-dom';

const HostPanel = () => {
    return (
        <div>
            <li><Link to="add-product">Add Product</Link></li>
            <li><a href="">All Sold Products</a></li>
            <li><a href="">Remaining Products</a></li>
            <li><a href="">All Products</a></li>
        </div>
        
        
    );
};

export default HostPanel;