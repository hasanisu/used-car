import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminPanel from "./AdminPanel";
import HostPanel from "./HostPanel";

const Sidebar = () => {
  const user = {  };
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
          { user.role === "admin" || user.role ===  'host' ? (
            <>{user?.role === "admin" ? <AdminPanel /> : <HostPanel />}</>
          ) : (
            <>
              <li>
                <Link>My Favorite List items</Link>
              </li>
              <li>
                <Link to='become-a-seller'>Become a Seller</Link>
              </li>
              <li>
                <Link>Purchase History</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
