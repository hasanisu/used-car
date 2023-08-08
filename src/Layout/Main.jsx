import React from 'react';
import { Outlet } from 'react-router-dom';
import CarCategory from '../Pages/Shared/CarCategory';
import Navbar from '../Pages/Shared/Navbar';

const Main = () => {
    return (
        <div >
            <div> <Navbar></Navbar></div>

            <div className="flex">
                <div className=''>
                    <CarCategory />
                </div>
                <div className='flex-auto w-64 pl-10'>
                    <Outlet></Outlet>
                </div >

            </div>


        </div>
    );
};

export default Main;