/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    if(loading){
        return <progress className="progress w-48"></progress>
    }


    if (user?.email) {
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;