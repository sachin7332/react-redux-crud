import React from "react";
import { useLocation, Navigate } from "react-router-dom";


export default function AuthGuard({ children }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const { pathname } = useLocation();

  if (!isAuthenticated) return <>{children}</>;

  return <Navigate replace to="/session/signin" state={{ from: pathname }}   />;
}
