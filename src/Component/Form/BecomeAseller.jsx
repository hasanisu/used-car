import React, { useContext, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Spinner from "../Loader/Spinner";
import { AuthContext } from "../../context/AuthProvider";
import { getImageUrl } from "../../api/imageUpload";
import { getRole, sellerRequest } from "../../api/user";
import { toast } from "react-hot-toast";
import MainLoader from "../Loader/MainLoader";

const BecomeAseller = () => {
  const { user} = useContext(AuthContext);
  const [sellerType, setSellerType] = useState("individual");
  const {register,handleSubmit,formState: { errors }} = useForm();
  const [requestError, setRequestError] = useState("");
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    getRole(user?.email)
    .then(data => {
      console.log(data)
      setRole(data)
      setLoading(false)
    })
  },[user])
  console.log(user)
  
  const handleToSeller = (data) => {
    
    const name= data.name;
    const companyName = data.company;
    const address = data.address;
    const email= data.email;
    const image = data.image[0];

    getImageUrl(image).then(data =>{
      const sellerData = {
        name: name,
        companyName: companyName,
        documentImage:data,
        address:address,
        email:email,
        role: 'requested',
        status:'not verified'
      }
      sellerRequest(sellerData).then(data => {
        console.log(data)
        if(data.acknowledged){
          setLoading(false)
          toast.success('Successfully Send your Request')
        }
      }).catch(error=> console.error(error))

    })
    
  };






  return (
    <div className="h-[800px] flex justify-center items-center shadow-2xl">
      {
         role === 'requested' ? 
        
          <>
           <div>
            Request sent, Please wait for admin approval
          </div> </>
        

        :
       (<>
       {
        !loading &&  <div className="w-5/12 p-7 shadow-lg">
        <h2 className="text-xl text-center">Become A Seller Form</h2>

        <div className="flex justify-around mb-10 mt-10">
          <div>
            <input
              type="radio"
              name="SellerType"
              value="individual"
              defaultChecked
              onChange={(e) => setSellerType(e.target.value)}
            />{" "}
            Individual
          </div>
          <div>
            <input
              type="radio"
              name="SellerType"
              value="company"
              onChange={(e) => setSellerType(e.target.value)}
            />{" "}
            Company
          </div>
        </div>

        <form onSubmit={handleSubmit(handleToSeller)}>
          {sellerType === "individual" || sellerType === "company" ? (
            <>
              {sellerType === "individual" ? (
                <div className="flex gap-3">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="name"
                      defaultValue={user?.displayName}
                      readOnly
                      {...register("name", {
                        required: true,
                        
                      })}
                      className="input input-bordered w-full "
                    />
                    {errors.first && (
                      <div className="alert alert-warning p-2 mt-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="stroke-current shrink-0 h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                          />
                        </svg>
                        <span className="text-sm">{errors.name?.message}</span>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex gap-3">
                    <div className="form-control w-full ">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        type="name"
                        defaultValue={user?.displayName}
                        {...register("name", {
                          required: true,
                        })}
                        className="input input-bordered w-full"
                      />
                      {errors.first && (
                        <div className="alert alert-warning p-2 mt-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-current shrink-0 h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                          </svg>
                          <span className="text-sm">
                            {errors.name?.message}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text">Company Name</span>
                    </label>
                    <input
                      type="company"
                      {...register("company", {
                        required: true,
                      })}
                      className="input input-bordered w-full "
                    />
                    {errors.company && (
                      <div className="alert alert-warning p-2 mt-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="stroke-current shrink-0 h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                          />
                        </svg>
                        <span className="text-sm">
                          {errors.company?.message}
                        </span>
                      </div>
                    )}
                  </div>
                </>
              )}
            </>
          ) : (
            <h2>please select your application type</h2>
          )}

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              {...register("email", {
                required: true,
              })}
              className="input input-bordered w-full"
            />
            {errors.email && (
              <div className="alert alert-warning p-2 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span className="text-sm">{errors.email?.message}</span>
              </div>
            )}
          </div>

          <div className="form-control w-full mt-2">
            <label className="label">
              <span className="label-text">{sellerType === 'company'? 'Your Trade License' : 'Your ID Card'}</span>
            </label>
            <input
              type="file"
              {...register("image", {
                required: "Image is required",
              })}
              className="input input-bordered w-full  pt-2"
            />
            {errors.image && (
              <div className="alert alert-warning p-2 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span className="text-sm">{errors.image?.message}</span>
              </div>
            )}
          </div>

          <div className="form-control w-full mt-2">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="address"
              {...register("address", {
                required: true,
              })}
              className="input input-bordered w-full"
            />
            {errors.address && (
              <div className="alert alert-warning p-2 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span className="text-sm">{errors.address?.message}</span>
              </div>
            )}
          </div>
          <div className="form-control w-full mt-2">
            <label className="label">
              <span className="label-text">Why want to a seller?</span>
            </label>
            <textarea
              type="address"
              {...register("address", {
                required: true,
              })}
              className="textarea textarea-bordered w-full"
            />
            {errors.address && (
              <div className="alert alert-warning p-2 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span className="text-sm">{errors.address?.message}</span>
              </div>
            )}
          </div>

          <div className="flex justify-center items-center mt-4">
            <button className="btn btn-md btn-primary w-full text-lg">
              {loading ? <Spinner /> : "Submit Request"}
            </button>
          </div>

          {requestError && <p className="text-red-600">{requestError}</p>}
        </form>
      </div>
       }
       </>)
      }
    </div>
  );
};

export default BecomeAseller;
