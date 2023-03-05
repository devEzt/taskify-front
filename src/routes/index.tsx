// routes/index.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import HomePage from '../pages/Home/Home';
import LoginPage from '../pages/Login/Login';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/home" />} />
      <Route path="/home/*" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;
