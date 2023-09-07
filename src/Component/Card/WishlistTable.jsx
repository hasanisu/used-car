import React from "react";

const WishlistTable = ({cart, i, handleToDelete}) => {
    const {carImage, sellingPrice, modelName, makerName, _id} = cart;
    console.log(cart)

    
    
    

  return (
    <tr>
      <td >
        <h2 className="bg-gray-900 w-8 h-8 rounded-full pl-3 pt-1">{i+1}</h2>
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={carImage}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold uppercase">{makerName}</div>
            <div className="text-xs opacity-50 uppercase">{modelName}</div>
          </div>
        </div>
      </td>
      <td>
        <span className="">
            ¥{parseInt(sellingPrice)}
        </span>
      </td>
      <td>Purple</td>
      <th>
        <button onClick={()=>handleToDelete(_id)} className="btn btn-ghost btn-sm">X</button>
      </th>
    </tr>
  );
};

export default WishlistTable;
