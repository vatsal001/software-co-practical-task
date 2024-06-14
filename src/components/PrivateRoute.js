// src/components/PrivateRoute.js
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ roles }) => {
  const { user } = useSelector((state) => state.user);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (roles && roles.indexOf(user.role) === -1) {
    return <Navigate to="/access-denied" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
