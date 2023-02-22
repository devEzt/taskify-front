import React from 'react';
import { Route, Navigate } from 'react-router-dom';

type ProtectRouteProps = {
  path: string;
  element: JSX.Element;
  isAuthenticated: boolean;
};

const ProtectedRoute = ({
  path,
  element,
  isAuthenticated,
}: ProtectRouteProps) => {
  return isAuthenticated ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
