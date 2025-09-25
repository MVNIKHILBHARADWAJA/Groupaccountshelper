import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { DataContext } from "../context/UserContext";

const ForwardingRoute = ({ children }) => {
  const {User,setUser}=useContext(DataContext);
  return User? children : <Navigate to="/signIn" replace />;
};

export default ForwardingRoute;
