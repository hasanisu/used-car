import React from 'react';
import {Link} from 'react-router-dom'

const AdminPanel = () => {
    return (
        <div>
            <li><Link to="all-users">All Users</Link></li>
            <li><Link to="all-sellers">All Seller List</Link></li>
            <li><Link to="all-buyers">All Buyer List</Link></li>
            <li><Link>Manage Users</Link></li>
        </div>
    );
};

export default AdminPanel;