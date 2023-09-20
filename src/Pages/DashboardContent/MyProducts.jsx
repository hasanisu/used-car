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



// For update product status 
    const handleToUpdateStatus=(id)=>{
        fetch(`http://localhost:5000/all-car/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('usedCar-token')}`
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
        setProductStatus(event.target.value)
    }




//For delete product
    const handleToDelete = (id)=>{
        // const isProcced = window.confirm(`Are you want to delete this id ${id}`)
        
            fetch(`http://localhost:5000/all-car/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('usedCar-token')}`
            },
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount){
                console.log(data)
                toast.success('product has been deleted succesfully')
                getProduct();
            }
        })
        
    }




    return (
       <div className='mt-20'>
        {
            products.length > 0 ?  <div className=''>
            {loading ? <MainLoader/> :
            <div className='px-4'>
                {/* className="overflow-x-auto scroll-m-2" */}
            <div >
                <table className="table">
                    {/* head */}
                    <thead className='bg-gray-700 static '>
                        <tr className='text-lg uppercase'>
                            <th></th>
                            <th>Maker</th>
                            <th>Post-date</th>
                            <th>Kilometer</th>
                            <th>Selling Price</th>
                            <th>Buying Price</th>
                            <th>Transmission</th> 
                            <th>Location</th> 
                            <th>Sale</th> 
                            <th>color</th>
                            <th>status</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            products.map((product, i) => <TableRow key={product._id} 
                            product={product}
                            i={i}
                            handleToUpdateStatus={handleToUpdateStatus}
                            getPaidStatus={getPaidStatus}
                            handleToDelete={handleToDelete}
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