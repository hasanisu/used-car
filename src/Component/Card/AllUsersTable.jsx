import React from "react";
import Spinner from "../Loader/Spinner";

const AllUsersTable = ({ user, i, handleRequest, loading, handleVerification }) => {
  const { image, name, role, status } = user;

  return (
    <tr className="hover:bg-gray-500 rounded-lg text-md uppercase">
      <th>{i + 1}</th>
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
      <td className="">{role ? role : "user"}</td>
      <td>

        {status && status === 'not verified' ?
         <span onClick={() => handleVerification(user)}>
         {loading ? (
           <Spinner />
         ) : (
           <button className="btn btn-ghost btn-xs bg-primary">
             Verify Seller
           </button>
         )}
       </span>
       : 
       status
        }
        
        </td>
      <th>

        {role && role === "requested" && (
          <span onClick={() => handleRequest(user)}>
            {loading ? (
              <Spinner />
            ) : (
              <button className="btn btn-ghost btn-xs bg-primary">
                Approve Request
              </button>
            )}
          </span>
        )}

      </th>
    </tr>
  );
};

export default AllUsersTable;
