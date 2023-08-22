import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleToLogout = ()=>{
        logOut()
  }


  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="normal-case text-primary text-2xl">
          UsedCar
        </Link>
      </div>
      {user?.uid ? (
        <>
          <div className="flex-none gap-2">
            
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-16 rounded-full">
                  <img src={user.photoURL} alt=""/>
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link to='dashboard'>Dashboard</Link>
                </li>
                <li onClick={handleToLogout}>
                  <Link>Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link>HOME</Link>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>FOR DEALER</summary>
                  <ul className="p-2">
                    <li>
                      <Link>Bangladesh</Link>
                    </li>
                    <li>
                      <Link>Pakistan</Link>
                    </li>
                    <li>
                      <Link>India</Link>
                    </li>
                    <li>
                      <Link>Africa</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link>INQUERY</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div>
              <Link to="/login" className="btn btn-sm mr-4 hover:btn-primary">
                LOGIN
              </Link>
            </div>
            <div>
              <Link to="/signup" className="btn btn-sm btn-primary">
                SingUp
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
