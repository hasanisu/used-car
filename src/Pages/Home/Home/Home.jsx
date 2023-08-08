import React from 'react';
import Catatory from '../Catagory/Catatory';
import HomeBanner from '../HomeBanner/HomeBanner';
import NewArrivals from '../NewArrivals/NewArrivals';

const Home = () => {
    return (
        <div className='mt-10 ml-0'>
            <h2 className='text-2xl text-center text-5xl mb-20 font-bold'>Used Car Buy & Sale Online Market</h2>
            <HomeBanner></HomeBanner>
            <NewArrivals/>
            <Catatory />
    

        </div>
    );
};

export default Home;