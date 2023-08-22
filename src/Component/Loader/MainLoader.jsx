import React from 'react';

const MainLoader = () => {
    return (
        <div>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-indigo-400"></div>
            <div>...LOADING....</div>
        </div>
    );
};

export default MainLoader;