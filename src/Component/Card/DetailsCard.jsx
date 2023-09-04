import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { ConstructionOutlined } from "@mui/icons-material";
import { addToWishlist, deleteToWishlist } from "../../api/user";
import { AuthContext } from "../../context/AuthProvider";

const DetailsCard = ({ arrival }) => {
  const { modelName, makerName, sellingPrice, carImage, kilometer, _id, sale, seller } = arrival;

const {user} = useContext(AuthContext)

  const [active, setActive] = useState(false)
  const [wishList, setWishList]= useState([])

  const isActive = () => {
    setActive(!active)
    console.log(!active)
    const addToCart = {
        modelName, makerName, sellingPrice, carImage, _id, wishlist:'yes'
      }


      if (active === false ) {
        addToWishlist(addToCart).then(data =>{
          console.log(data)
          setWishList(data)
          
        }).catch(err => console.log(err))
      }

      else{
        deleteToWishlist(_id).then(data => {
          console.log(data)
        }).catch(err => console.log(err))
      }
    
  }

 






  return (
    <div className="card bg-green-700 shadow-xl">
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
      <button disabled={!user?.email} onClick={isActive}  className="flex justify-end  mt-2"><FaStar className={`w-14 h-6 ${active === true && 'text-orange-500'}`} /></button>
      <div className="card-body">
        <h2 className="card-title text-gray-800">
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

        <div className="card-actions justify-end">
          <Link to={`/car-details/${_id}`}>
            <button className="btn btn-xs btn-primary">View Details</button>
          </Link>
          <Link to={`/car-details/${_id}`}>
            <button className="btn btn-xs btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
