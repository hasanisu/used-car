import React from 'react';

const MainLoader = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div >
            <div className='bg-gray-300 text-xl px-6 text-gray-900 rounded-sm'>...LOADING....</div>
            <div className="w-8 h-8 border-4 border-dotted rounded-full animate-spin dark:border-indigo-400 ml-16 mb-2"></div>
            </div>
        </div>
    );
};

export default MainLoader;