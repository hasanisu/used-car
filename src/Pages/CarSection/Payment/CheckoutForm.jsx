import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import toast from "react-hot-toast";


const CheckoutForm = ({ paymentProduct }) => {
  const {user} = useContext(AuthContext);
  const [cardError, setCardError] = useState("");
  const [cardSuccess, setCardSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [loader, setLoader] = useState(true);
  const [purchaseDate, setPurchaseDate] = useState(new Date());


  console.log(clientSecret)
  const stripe = useStripe();
  const elements = useElements();

  const { sellingPrice, _id, makerName, modelName, color } = paymentProduct;

    useEffect(()=>{
        setLoader(true)
        fetch('http://localhost:5000/create-payment-intent',{
            method: 'POST',
            headers:{
                'content-type':'application/json',
                authorization: `bearer ${localStorage.getItem('usedCar-token')}`
            },
            body: JSON.stringify({sellingPrice})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setClientSecret(data.clientSecret)
            setLoader(false)
        })
    },[sellingPrice])




  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    //   console.log("[PaymentMethod]", paymentMethod);
    }

    setCardSuccess('')
    setLoader(true)
    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: user?.displayName,
              email:user?.email,
            //   carId: _id,
            //   Brand: makerName,
            //   model: modelName,
            //   color,

            },
          },
        },
      );

      if(confirmError){
        setCardError(confirmError.message);
        return;
      }
      if(paymentIntent.status === 'succeeded'){
        
        const payment ={
          sellingPrice,
          transactionId: paymentIntent.id,
          email: user?.email,
          productId: _id,
          purchaseDate


        }
        fetch('http://localhost:5000/payments', {
          method: 'POST',
          headers:{
            'content-type':'application/json',
            authorization: `bearer ${localStorage.getItem('usedCar-token')}`
          },
          body: JSON.stringify(payment)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.insertedId){
            toast.success('Congratulation!!your payment has been completed')
            setCardSuccess('Payment successfully completed')
            setTransactionId(paymentIntent.id)
          }
        })
        
      }
      console.log('paymentIntent',paymentIntent)
      setLoader(false)






  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm mt-4 btn-primary"
          type="submit"
          disabled={!stripe || !clientSecret || loader}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500 mt-5">{cardError}</p>
      {
        cardSuccess && <div>
          <p className="text-green-500">{cardSuccess}</p>
          <p>Your Transaction Id: <span>{transactionId}</span> </p>
        </div>
      }
    </>
  );
};

export default CheckoutForm;
