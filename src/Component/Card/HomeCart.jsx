import React from "react";
import { Link } from "react-router-dom";

const HomeCart = ({promotion}) => {
  const { modelName, makerName, sellingPrice, carImage, kilometer, _id, sale } =
    promotion;

  return (
    <div className="card shadow-xl image-full">

      <figure>
        <img src={carImage} alt="" className="p-2 rounded-3xl" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{modelName}</h2>
        <span>kilometer: {kilometer}</span>
        <span>Price: ${sellingPrice}</span>
        {promotion.sale > 0 && <p>Save {sale}%</p>}

        <div className="card-actions justify-end">
          <Link to={`/car-details/${_id}`}>
            <button className="btn btn-xs btn-primary">view Details</button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default HomeCart;
