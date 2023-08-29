import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRole } from "../../api/user";
import { AuthContext } from "../../context/AuthProvider";
import AdminPanel from "./AdminPanel";
import HostPanel from "./HostPanel";
import UserPanel from "./UserPanel";

const Sidebar = () => {
const {user} = useContext(AuthContext);
const [role, setRole] = useState(null)

useEffect(()=>{
  getRole(user?.email)
  .then(data => {
    console.log(data)
    setRole(data)
  })
},[user])

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{/* Page content here */}</div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>

        <ul className="menu p-4 w-72 h-full bg-yellow-700 text-base-content fixed">
          <div className="text-center">
            <img
              src="https://i.ibb.co/P64wgQj/osman.jpg"
              alt="userPhoto"
              className="avatar w-24 rounded-xl"
            />
            <h2 className="text-xl">Imam Md Hasan</h2>
            <p>Role: Admin</p>
            <hr className="mt-10 mb-5" />
          </div>
          {/* Sidebar content here */}
          { role === "admin" || role ===  'seller' ? (
            <>{role === "admin" ? <AdminPanel /> : <HostPanel/>}</>
          ) : (
            <>
              <UserPanel/>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
