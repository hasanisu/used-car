import React, { useContext } from 'react';
import Sidebar from '../Component/DashBoard/Sidebar';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import MainLoader from '../Component/Loader/MainLoader';
import { FaBars } from "react-icons/fa";

const Dashboard = () => {
  const { user, loading } = useContext(AuthContext)

  return (
    <div>
      {
        loading ? <MainLoader /> :
          <>
            <div className='flex justify-around items-center py-2  bg-red-500'>
              <h2 className=''>DashBoard</h2>
              <div className='flex items-end'>
                <label htmlFor="my-drawer" className="btn btn-sm bg-red-500 drawer-button lg:hidden"><FaBars /></label>
              </div>
            </div>


            <div className='className="md:flex relative min-h-screen"'>

              <div className=''>
                <Sidebar />
              </div>
              <div className='flex-1 md:ml-64'>
                <Outlet/>
              </div>

            </div>
          </>
      }
    </div>
  );
};

export default Dashboard;