import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getAllUser, makeSeller, sellerRequest, verifiedSeller } from "../../api/user";
import AllUsersTable from "../Card/AllUsersTable";
import MainLoader from "../Loader/MainLoader";

const Allusers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUsers()
  }, []);

  const getUsers=()=>{
    setLoading(true);
    getAllUser().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }


  const handleRequest=(user)=>{
    makeSeller(user)
    .then(data => {
      console.log(data)
      getUsers()
    })
  }

  const handleVerification = (user)=> {
    verifiedSeller(user).then(data =>{
      console.log(data)
      getUsers()
    })
  }

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
              {users?.map((user, i) => (
                <AllUsersTable 
                key={user._id} 
                user={user} 
                i={i}
                loading={loading}
                handleRequest={handleRequest}
                handleVerification={handleVerification}
                
                ></AllUsersTable>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Allusers;
