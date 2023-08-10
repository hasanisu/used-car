import React from 'react';
import { Outlet } from 'react-router-dom';
import CarCategory from '../Pages/Shared/CarCategory';
import Navbar from '../Pages/Shared/Navbar';

const Main = () => {
    return (
        <div >
            <div> <Navbar></Navbar></div>

            <div className="lg:flex">
                <div className='flex-auto w-96'>
                    <Outlet></Outlet>
                </div >
                <div className='w-80 pl-6'>
                    <CarCategory />
                </div>

            </div>


        </div>
    );
};

export default Main;