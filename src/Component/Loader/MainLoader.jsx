import React from 'react';

const MainLoader = () => {
    return (
        <div className='flex justify-center items-center h-full'>
            <div >
            <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin dark:border-indigo-400"></div>
            <div>...LOADING....</div>
            </div>
        </div>
    );
};

export default MainLoader;