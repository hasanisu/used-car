import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { getSellerProducts, statsuPaid } from '../../api/user';
import TableRow from '../../Component/Card/TableRow';
import MainLoader from '../../Component/Loader/MainLoader';
import AuthProvider, { AuthContext } from '../../context/AuthProvider';

const MyProducts = () => {
    const {user} = useContext(AuthContext)
    
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [productStatus, setProductStatus] = useState(null)
    useEffect(()=>{
       getProduct()
    },[])


    const getProduct =()=> {
        getSellerProducts(user?.email)
        .then(data =>{
            setLoading(false)
            setProducts(data)
        })
    }

    const handleRequest=(id)=>{
        fetch(`http://localhost:5000/all-car/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({productStatus: productStatus})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                toast.success('product staus succesfully update')
                getProduct();
            }
        })
      }


      const getPaidStatus = (event)=>{
        console.log(event.target.value)
        setProductStatus(event.target.value)
    }




    return (
       <div className='mt-20'>
        {
            products.length > 0 ?  <div className=''>
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
                            handleRequest={handleRequest}
                            getPaidStatus={getPaidStatus}
                            >

                            </TableRow>)
                        }

                    </tbody>
                   
                    

                </table>
            </div>
        </div>
            }
        </div>
        :
        'NO PRODUCT AVAILABLE'
        }
        

       </div>
    );
};

export default MyProducts;