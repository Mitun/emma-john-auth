import React, { useState } from "react";
import { AuthContext } from "../contexts/UserContexts";
import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log("now inside private router");

  if (loading) {
    console.log("Now im loading");
    return <div>Loading...</div>;
  }
  if (user && user.uid) {
    console.log("i got user");
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;

  //   return <div></div>;
};

export default PrivateRouter;
