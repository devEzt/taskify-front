import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from '././pages/Home/Home';
import Login from '././pages/Login/Login';

function App() {
  return (
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route index path="/dashboard" element={<Login />} />
    </Routes>
  );
}

export default App;
