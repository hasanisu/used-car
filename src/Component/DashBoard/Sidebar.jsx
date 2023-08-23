import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  
  return (
    <div className="drawer lg:drawer-open">
    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
      {/* Page content here */}
      
    </div> 
    <div className="drawer-side ">
      <label htmlFor="my-drawer" className="drawer-overlay"></label>
      <ul className="menu p-4 w-60 h-full bg-red-300 text-base-content">
        {/* Sidebar content here */}
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
        
      </ul>
    </div>
  </div>
  );
};

export default Sidebar;
