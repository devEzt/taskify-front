// routes/index.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import HomePage from '../pages/Home/Home';
import LoginPage from '../pages/Login/Login';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/login" />} />
      <Route path="/home/*" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <ProtectedRoute
        path="/dashboard"
        element={<HomePage />}
        isAuthenticated={true}
      />
    </Routes>
  );
};

export default AppRoutes;
