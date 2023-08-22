import React, { useContext } from 'react';
import Sidebar from '../Component/DashBoard/Sidebar';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import MainLoader from '../Component/Loader/MainLoader';

const Dashboard = () => {
    const {user, loading} = useContext(AuthContext)
    
    return (
        <div className="w-full md:flex relative min-h-screen">
            <h2>DashBoard</h2>
        {loading ? (
          <MainLoader/>
        ) : (
          <>
            <div>
              <Sidebar 
              role='role'
              loading={loading}
              ></Sidebar>
            </div>
            <div className=" flex-1 md:ml-64">
              <div className="p-5">
                <Outlet />
              </div>
            </div>
          </>
        )}
      </div>
    );
};

export default Dashboard;