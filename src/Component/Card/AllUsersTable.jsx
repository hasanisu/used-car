import React from 'react';

const AllUsersTable = ({user, i}) => {
const {image, name, role, status}= user;


    return (
        <tr className='hover:bg-orange-400 hove:rounded-lg'> 
            <th>
                {i + 1}
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td className=''>
                {role ? role : 'user' }
            </td>
            <td>{status}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default AllUsersTable;