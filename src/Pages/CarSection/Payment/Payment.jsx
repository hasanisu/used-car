import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
const Payment = () => {
  const paymentProduct = useLoaderData();
  const { makerName, modelName, sellingPrice } = paymentProduct;
  return (
    <div>
      <h2>Payment Section</h2>
      <span>
        Payment For Product Name: {makerName} {modelName}
      </span>
      <h3>Payment Price: ¥ {sellingPrice}</h3>

      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm 
          paymentProduct={paymentProduct}
          />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
