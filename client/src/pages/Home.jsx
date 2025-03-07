// frontend/src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => (
  <div>
    <h1>Welcome to the Student Registration App</h1>
    <nav>
      <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
    </nav>
  </div>
);
export default Home;