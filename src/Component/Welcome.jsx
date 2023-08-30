import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { getRole } from '../api/user';
import { AuthContext } from '../context/AuthProvider';

const Welcome = () => {
    const {user} = useContext(AuthContext)
    const [role, setRole] = useState(null)
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        getRole(user?.email).then(data =>{
            setRole(data)
            setLoading(false)
        })
    },[user])
    console.log(role)
    return (
        <div className='h-screen flex flex-col justify-center items-center pb-16'>
            <div className='flex justify-center items-center'>
                <span className='text-5xl font-bold'>Welcome To</span>
                

            </div>
            <div className='flex justify-center items-center'>
                {!loading && role === 'admin' || role === 'seller' ? (
                    <>
                    {
                        role === 'admin' ? (
                            <p className='text-2xl mt-4 text-gray-400'>Admin Dashboard</p>
                        )
                        :
                            (<p className='text-2xl mt-4 text-gray-400'>Host Dashboard</p>)
                    }
                    </>
                )
                :
                <p className='text-2xl mt-4 text-gray-400'>User Dashboard</p>   
               }
               
            </div>

        </div>
    );
};

export default Welcome;