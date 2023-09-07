import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getAllUser } from '../../api/user';
import AllUsersTable from '../Card/AllUsersTable';


const Allusers = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

   useEffect(()=>{
    setLoading(true)
    getAllUser()
    .then(data =>{
        console.log(data)
        setUsers(data)
        setLoading(false)
    })
   },[])
    
    return (
        <div className="overflow-x-auto mt-20">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>No.</th>
        <th>Name</th>
        <th>Role</th>
        <th>Seller Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user, i) => <AllUsersTable
      key={user._id}
      user={user}
      i={i}
      ></AllUsersTable>)}
     
    </tbody>
   
    
  </table>
</div>
    );
};

export default Allusers;