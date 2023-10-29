import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { ConstructionOutlined } from "@mui/icons-material";
import { addToWishlist, deleteToWishlist } from "../../api/user";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";
import useCart from "../../hooks/useCart";

const DetailsCard = ({ arrival }) => {
  const {
    modelName,
    makerName,
    sellingPrice,
    carImage,
    kilometer,
    _id,
    sale,
    seller,
    color,
    paid,
  } = arrival;

  const { user } = useContext(AuthContext);
  const [, , refetch] = useCart();

  const handleToCart = () => {
    if (user) {
      const addToCart = {
        modelName,
        makerName,
        sellingPrice,
        carImage,
        carId: _id,
        color,
        wishlist: "yes",
        name: user?.displayName,
        email: user?.email,
      };

      addToWishlist(addToCart)
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            refetch();
            toast.success("added to your cart list");
          }
        })
        .catch((err) => console.log(err));
    } else {
      toast.error("please login to add product");
    }
  };

  return (
    <div>
      {paid ? (
        
        



<div className="card bg-green-700 shadow-xl image-full">
          {carImage ? (
            <figure>
              <img src={carImage} alt="" className="w-full border-0" />
            </figure>
          ) : (
            <figure>
              <h2 className="text-2xl h-52 flex justify-center items-center">
                No Image Preview
              </h2>
            </figure>
          )}

          <div className="card-body">
            <h2 className="card-title text-gray-800 ">
              MakerName: {makerName} {modelName}
            </h2>
            <p>price: ¥{sellingPrice}</p>
            <span>kilometer: {kilometer}</span>
            {arrival.sale > 0 && <p>Save {sale}%</p>}
            <hr />

            <div className="avatar">
              {seller?.status === "verified" ? (
                <>
                  <div className="grid w-10 rounded-full">
                    <img src={seller?.image} alt="" className="" />
                  </div>
                  <span className="indicator-item badge badge-xs badge-success -ml-3 -mt-1 "></span>{" "}
                </>
              ) : (
                <div className="grid w-10 rounded-full">
                  <img src={seller?.image} alt="" className="" />
                </div>
              )}
            </div>

            <div className="card-actions justify-center">
              <h2 className=" text-2xl font-bold text-red-500">STOCK OUT</h2>
            </div>
           
          </div>
        </div>



      ) : (
        <div className="card bg-green-700 shadow-xl">
          {carImage ? (
            <figure>
              <img src={carImage} alt="" className="w-full h-48 border-0" />
            </figure>
          ) : (
            <figure>
              <h2 className="text-2xl h-52 flex justify-center items-center">
                No Image Preview
              </h2>
            </figure>
          )}

          <div className="card-body">
            <h2 className="card-title text-gray-800 uppercase -mt-5">
               {makerName} {modelName}
            </h2>
            <p>price: ¥{sellingPrice}</p>
            <span>kilometer: {kilometer}</span>
            {arrival.sale > 0 && <p>Save {sale}%</p>}
            <hr />

            <div className="avatar">
              {seller?.status === "verified" ? (
                <>
                  <div className="grid w-10 rounded-full">
                    <img src={seller?.image} alt="" className="" />
                  </div>
                  <span className="indicator-item badge badge-xs badge-success -ml-3 -mt-1 "></span>{" "}
                </>
              ) : (
                <div className="grid w-10 rounded-full">
                  <img src={seller?.image} alt="" className="" />
                </div>
              )}
            </div>

            <div className="card-actions justify-end -mt-5">
              <Link to={`/car-details/${_id}`}>
                <button className="btn btn-xs btn-primary">View Details</button>
              </Link>
              <Link to={`/payment/${_id}`}>
                <button className="btn btn-xs btn-primary">Buy Now</button>
              </Link>
            </div>
            <button onClick={handleToCart} className=" bg-orange-400 mt-2">
              add to cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsCard;
