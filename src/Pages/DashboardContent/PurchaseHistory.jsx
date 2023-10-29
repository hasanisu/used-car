import React from 'react';
import { useEffect } from 'react';
import { getPurchaseCarByEmail } from '../../api/cars';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { useState } from 'react';
import PurchaseRow from '../../Component/Card/PurchaseRow';

const PurchaseHistory = () => {
const {user} = useContext(AuthContext)
const [userPurchaseHistory, setUserPurchaseHistory] = useState([])

    useEffect(()=>{
        getPurchaseCarByEmail(user?.email)
        .then(data => {
            console.log(data)
            setUserPurchaseHistory(data)
        })
    },[user?.email])


    return (
        <div className='mt-20'>
            <h2>This is purchase history</h2>
            <div>
            <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th></th>
        <th>ID</th>
        <th>NAME</th>
        <th>PRICE</th>
        <th>TRANSACTION-ID</th>
        <th>PURCHASE-DATE</th>
        <th>DETAILS</th>
        <th>STATUS</th>
      </tr>
    </thead>
    <tbody>
    {
                userPurchaseHistory.map((purchaseCar, i) => <PurchaseRow
                key={purchaseCar._id}
                purchaseCar={purchaseCar}
                i={i}
                >

                </PurchaseRow>)
            }
      
      
    </tbody>
  </table>
            </div>
           
        </div>
    );
};

export default PurchaseHistory;