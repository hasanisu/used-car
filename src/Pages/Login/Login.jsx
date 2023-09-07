import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { setUserToDb } from '../../api/user';
import { toast } from 'react-hot-toast';
import Spinner from '../../Component/Loader/Spinner';

const Login = () => {
  const { register,formState: { errors },handleSubmit } = useForm();
  const {user,loginUser, signInWithGoogle, loading, setLoading}= useContext(AuthContext)
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate()
  const location = useLocation();
  const from = location.state?.from?.pathName || '/'


  //General User Login
  const handleToLogin=(data)=>{
    setLoginError("");
    loginUser(data.email, data.password)

    .then(result => {
      const user = result.user;
      const userInfo ={
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
      }
      setUserToDb(userInfo)
      setLoading(false)
      navigate(from, {replace: true})
      toast.success('Successfully login')
    })
    .catch(err => {
      toast.error(err.message)
      setLoading(false)
    })

  }



  const loginWithGoogle =()=>{
    signInWithGoogle()
    .then(result =>{
      const user = result.user
      const userInfo ={
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
      }
      setUserToDb(userInfo)
      navigate(from, {replace: true})
        toast.success('Successfully login')
      
    })
    .catch(err => console.log(err))
  }


    return (
        <div className="h-[800px] flex justify-center items-center shadow-2xl">
      <div className="w-96 p-7 shadow-lg">
        <h2 className="text-xl text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleToLogin)}>

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
            {loading ? <Spinner/> : 'Login'}
            </button>
          </div>


          {loginError && <p className="text-red-600">{loginError}</p>}
        </form>

        <p>
          Already have an account ?{" "}
          <Link className="text-secondary" to="/signup">
            Signup here
          </Link>
        </p>
        <div className="divider">OR</div>
        <button onClick={loginWithGoogle} className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
    );
};

export default Login;