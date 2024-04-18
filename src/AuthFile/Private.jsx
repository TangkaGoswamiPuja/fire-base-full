import { useContext } from "react";
import { AuthContext } from "./Auth";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ children }) => {
    const { user, load } = useContext(AuthContext);
    const location = useLocation()
    // console.log(location)
    if (load) {
        return <span className="loading loading-spinner text-primary"></span>

    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>

};

export default Private;