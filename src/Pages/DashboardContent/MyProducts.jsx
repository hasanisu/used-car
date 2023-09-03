import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { getSellerProducts } from '../../api/user';
import TableRow from '../../Component/Card/TableRow';
import MainLoader from '../../Component/Loader/MainLoader';
import AuthProvider, { AuthContext } from '../../context/AuthProvider';

const MyProducts = () => {
    const {user} = useContext(AuthContext)
    
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        getSellerProducts(user?.email)
        .then(data =>{
            setLoading(false)
            setProducts(data)
        })
    },[user])
    return (
        <div className=''>
            {loading ? <MainLoader/> :
            <div className='px-4'>
            <div className="overflow-x-auto scroll-m-2">
                <table className="table">
                    {/* head */}
                    <thead className='bg-gray-700 static '>
                        <tr className='text-lg'>
                            <th></th>
                            <th>Maker</th>
                            <th>Post-date</th>
                            <th>Kilometer</th>
                            <th>Selling Price</th>
                            <th>color</th>
                            <th>status</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            products.map(product => <TableRow key={product._id} 
                            product={product}
                            >

                            </TableRow>)
                        }

                    </tbody>
                   
                    

                </table>
            </div>
        </div>
            }
        </div>
    );
};

export default MyProducts;