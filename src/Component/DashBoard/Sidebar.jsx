import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRole } from "../../api/user";
import { AuthContext } from "../../context/AuthProvider";
import AdminPanel from "./AdminPanel";
import HostPanel from "./HostPanel";
import UserPanel from "./UserPanel";

const Sidebar = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null)

  useEffect(() => {
    getRole(user?.email)
      .then(data => {
        console.log(data)
        setRole(data)
      })
  }, [user])

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>

        <ul className="menu p-4 w-72 h-full bg-yellow-700 text-base-content fixed">
          <div className="text-center">
            <img
              src={user?.photoURL}
              alt="userPhoto"
              className="avatar w-24 rounded-xl mt-20"
            />
            <h2 className="text-xl">{user?.displayName}</h2>
            <p>Role: {role}</p>
            <hr className="mt-16 mb-5" />
          </div>
          {/* Sidebar content here */}
          {role === "admin" || role === 'seller' ? (
            <>{role === "admin" ? <AdminPanel /> : <HostPanel />}</>
          ) : (
            <>
              <UserPanel />
            </>
          )}
          <div className="mt-96">
            <Link to='/'>
            <button className=" bg-blue-500 hover:bg-blue-300 hover:text-gray-900 w-full py-2 text-lg rounded-3xl">Bank to Home</button>
            </Link>
          </div>
        </ul>

      </div>

    </div>
  );
};

export default Sidebar;
