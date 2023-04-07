import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import HomePage from '../pages/Home/Home';
import LoginPage from '../pages/Login/Login';
import { getValidToken } from '../pages/Login/Login';

const AppRoutes = () => {
  const token = getValidToken();
  const isAuthenticated = token !== null;

  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/home" />} />
      <Route
        path="/home/*"
        element={
          isAuthenticated ? <HomePage /> : <Navigate to="/login" replace />
        }
      />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;
