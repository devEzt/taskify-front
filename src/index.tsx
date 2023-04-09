// src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, useLocation } from 'react-router-dom';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import AppRoutes from './routes';

const Main: React.FC = () => {
  const location = useLocation();

  const showAppBar = location.pathname !== '/login';

  return (
    <>
      {showAppBar && <ResponsiveAppBar />}
      <AppRoutes />
    </>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
);
