import { StorageConstant } from "constants/CommonConstants";
import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { getSecureData } from "utils/storageHelper";


export default function AuthGuard({ children }) {
  const isAuthenticated = getSecureData(StorageConstant.isAuthenticated) === "true";
  const { pathname } = useLocation();

  if (isAuthenticated) return <>{children}</>;

  return <Navigate replace to="/login" state={{ from: pathname }}   />;
}
