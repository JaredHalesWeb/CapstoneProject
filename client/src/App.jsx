// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import Profile from './pages/Profile';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Router>
);

export default App;
