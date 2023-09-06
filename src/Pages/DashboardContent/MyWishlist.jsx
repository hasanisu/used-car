import React from "react";
import useCart from "../../hooks/useCart";
import WishlistTable from "../../Component/Card/WishlistTable";

const MyWishlist = () => {
  const [userCart] = useCart();
  console.log(userCart)

  let total = 0;
  let quantity = 0;

  for (const product of userCart){
    const singleQuantity = product;
    const singleAmount = parseFloat(product.sellingPrice)
    console.log(singleAmount)
     quantity = quantity + singleQuantity;
        total = total + singleAmount * singleQuantity;
        console.log(total)
        // console.log(quantity)
    
}
  


  return (
    <div className="mt-32 max-w-4xl mx-auto ">
      <div className="overflow-x-auto">
        <table className="table bg-slate-500 ">
          {/* head */}
          <thead>
            <tr className="text-gray-900">
              <th>No.</th>
              <th>photo</th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {userCart?.map((cart, i) => (
              <WishlistTable
              key={cart.id}
              cart={cart}
              i={i}
              ></WishlistTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyWishlist;
