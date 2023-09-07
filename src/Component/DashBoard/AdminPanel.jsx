import React from 'react';
import {Link} from 'react-router-dom'

const AdminPanel = () => {
    return (
        <div>
            <li><Link to="all-users">All Users</Link></li>
            <li><a href="">Manage Users</a></li>
        </div>
    );
};

export default AdminPanel;