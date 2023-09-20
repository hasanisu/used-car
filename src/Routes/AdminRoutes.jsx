import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hooks/useAdmin';


const AdminRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation;
    if (loading || isAdminLoading) {
      return (
        <div className=" bg-red-300 w-4/12 h-16 rounded-md mx-auto mt-52 flex justify-center">
          <p className="mt-3 text-2xl">Loading ....</p>
          <span className="loading loading-ring loading-lg mr-"></span>
        </div>
      );
    }
    if (user && isAdmin === 'admin') {
      return children;
    }
    return <Navigate to="/login"></Navigate>;
  //   return <Navigate to="/login" state={{ from: location }} replace></Navigate>; eita kaj kortese na jonno oporer ta use koreci
 
};

export default AdminRoutes;