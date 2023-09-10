import React, { useEffect, useState } from 'react';
import { getAllSellers } from '../../api/user';
import AllUsersTable from '../../Component/Card/AllUsersTable';
import MainLoader from '../../Component/Loader/MainLoader';

const AllSellers = () => {
    const [sellers, setSellers] = useState([]);
    const [loading, setLoading]= useState(false)

    useEffect(()=>{
        setLoading(true)
        getAllSellers()
        .then(data => {
            console.log(data)
            setSellers(data)
            setLoading(false)
        })
    },[])

    return (
        <div>
      {loading ? (
        <MainLoader />
      ) : (
        <div className="overflow-x-auto max-w-7xl mx-auto mt-20 rounded-md">
          <table className="table">
            {/* head */}
            <thead className="">
              <tr className="uppercase text-lg bg-slate-600">
                <th>No.</th>
                <th>Name</th>
                <th>Role</th>
                <th>Seller Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sellers?.map((user, i) => (
                <AllUsersTable 
                key={user._id} 
                user={user} 
                i={i}
                loading={loading}
               
                
                ></AllUsersTable>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    );
};

export default AllSellers;