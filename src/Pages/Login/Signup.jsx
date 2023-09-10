import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { setUserToDb } from "../../api/user";
import { AuthContext } from "../../context/AuthProvider";
import Spinner from "../../Component/Loader/Spinner";

const Signup = () => {
  const { register,formState: { errors },handleSubmit } = useForm();
  const { createUser, updateUserProfile, loading, setLoading, signInWithGoogle } = useContext(AuthContext);
  const [signupError, setSignupError] = useState("");
  const [userType, setUserType] = useState('null');
  const navigate = useNavigate()
  const location = useLocation();
  const from = location.state?.from?.pathName || '/'


  const handleSignup = (data) => {
    setSignupError("");
   
    //Image save to imageBB api and db
    const image = data.image[0];
    const formData = new FormData()
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}`
    
    fetch(url, {
      method: 'POST',
      body: formData,
    })
    .then(res => res.json())
    .then(imgData => {
      console.log(imgData)
      if(imgData.success){
        console.log(imgData.data.url)

        createUser(data.email, data.password)
        .then(result => {
          console.log(result,'result')
          updateUserProfile(data.name, imgData.data.url)
          .then(()=>{
           
            const sellerInfo ={
              name: data.name,
              email: data.email,
              image: imgData.data.url,
              companyName: data.company,
              status: 'not verified',
              role: 'seller'
             }
    
           const buyerInfo ={
            name: data.name,
            email: data.email,
            image: imgData.data.url,
            companyName: data.company,
            role: 'buyer'
           }

           if(userType === 'company'){
            setLoading(true)
            setUserToDb(sellerInfo)
           }
           setLoading(true)
           setUserToDb(buyerInfo)
            // setUserToDb(data.name, data.email, imgData.data.url,).then(data => console.log(data))
            setLoading(false)
            navigate(from, {replace: true})
            toast.success('user created successfully')
          })
          .catch(err => {
            console.log(err)
           
          })
        })
        .catch(err => {
          toast.error(err.message)
          setLoading(false)
        })
      }
    }).catch(err => {
      console.log(err)
      
    })
    
  }


  //Login with google 

  const loginWithGoogle =()=>{
    signInWithGoogle()
    .then(result =>{
      const user = result.user
      setUserToDb(user.displayName, user.email, user.photoURL)
      .then(data => {
        setLoading(false)
        navigate(from, {replace: true})
        toast.success('Successfully login in')
      }).catch(err=> console.log(err))
    })
    .catch(err => console.log(err))
  }



  return (
    <div className="h-[800px] flex justify-center items-center shadow-2xl mt-16">
      <div className="w-96 p-7 shadow-lg">
        <h2 className="text-xl text-center">Sign Up</h2>
        <div className="flex justify-around mb-10 mt-10">
          <div>
            <input
              type="radio"
              name="SellerType"
              value="individual"
              defaultChecked
              onChange={(e) => setUserType(e.target.value)}
            />{" "}
            Individual
          </div>
          <div>
            <input
              type="radio"
              name="SellerType"
              value="company"
              onChange={(e) => setUserType(e.target.value)}
            />{" "}
            Company
          </div>
        </div>
        <form onSubmit={handleSubmit(handleSignup)}>

          {userType === 'individual' || userType === 'company' ?(
            <>
            {userType === 'individule' ? (
            <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
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
          )
        :
        <>
        <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
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
        }
            </>
          )
        :
        <>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
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
        </>
        }


          <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            type="file"
            {...register("image", {
              required: "Image is required",
            })}
            className="input input-bordered w-full max-w-xs pt-2"
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


          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
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
              
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "password must be 6 charecter or longer",
                },
                pattern: {
                  // value: /^(?=.*[A-Z])(?=.*[!@#$&*?])(?=.*[0-9])/,
                  message: "password must be strong Like, A!aa11",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text">Forget Password?</span>
            </label>
            {errors.password && (
              <div className="alert alert-warning p-2 mb-2">
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
                <span className="text-sm">{errors.password?.message}</span>
              </div>
            )}
          </div>

          <div className="flex justify-center items-center mb-2">
          <button className="btn btn-md btn-primary w-full text-lg">
            {loading ? <Spinner/> : 'SingUp'}
            </button>
          </div>


          {signupError && <p className="text-red-600">{signupError}</p>}
        </form>

        <p>
          Already have an account ?{" "}
          <Link className="text-secondary" to="/login">
            Login here
          </Link>
        </p>
       {
        userType !== 'company' && 
        <>
         <div className="divider">OR</div>
        <button onClick={loginWithGoogle} className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
        </>
       }
      </div>
    </div>
  );
};

export default Signup;
