import React from "react";
import useCart from "../../hooks/useCart";
import WishlistTable from "../../Component/Card/WishlistTable";
import { deleteToWishlist } from "../../api/user";
import toast from 'react-hot-toast';

const MyWishlist = () => {
  const [userCart, , refetch] = useCart();
  console.log(userCart)

  let total = 0;
  let quantity = 0;

  for (const product of userCart) {
    const singleQuantity = product;
    const singleAmount = parseFloat(product.sellingPrice)
    console.log(singleAmount)
    quantity = quantity + singleQuantity;
    total = total + singleAmount;
    console.log(total)
    // console.log(quantity)

  }


  const handleToDelete=(id)=>{
    deleteToWishlist(id)
    .then(data => {
      console.log(data)
      if(data.deletedCount > 0){
        refetch()
        toast.success('Item successfully deleted')
      }
    })
  }



  return (
    <div className="mt-32 max-w-4xl mx-auto ">
      <div className="overflow-x-auto">
        <table className="table bg-slate-500 ">
          {/* head */}
          <thead>
            <tr className="text-gray-900 text-lg uppercase">
              <th>No.</th>
              <th>photo</th>
              <th>price</th>
              <th>color</th>
              <th>Remove</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {userCart?.map((cart, i) => (
              <WishlistTable
                key={cart.id}
                cart={cart}
                i={i}
                handleToDelete={handleToDelete}
              ></WishlistTable>
            ))}
          </tbody>
         
        
          <tfoot className=" border-t-2 bg-slate-600">
            <tr>
              <th></th>
              <th className="text-lg font-bold text-teal-200">Total Amount</th>
              <th className="text-lg font-bold text-teal-200">¥ {total}</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MyWishlist;
