// frontend/src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="w-full flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
    <h1 className="text-3xl font-bold mb-4">Welcome to the Student Registration App</h1>
    <nav className="mb-4">
      <Link to="/login" className="text-blue-400 mx-2 hover:underline">
        Login
      </Link>
      <Link to="/register" className="text-blue-400 mx-2 hover:underline">
        Register
      </Link>
    </nav>
  </div>
);

export default Home;
