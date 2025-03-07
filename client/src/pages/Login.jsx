// frontend/src/pages/Login.jsx
import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
const Login = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const handleLogin = async (formData) => {
    try {
      const response = await api.post('/auth/login', formData);
      setMessage(response.data.message);
      // After a successful login, navigate to the profile page.
      navigate('/profile');
    } catch (error) {
      setMessage(error.response.data.message || 'Login failed');
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <AuthForm onSubmit={handleLogin} isRegister={false} />
      {message && <p>{message}</p>}
    </div>
  );
};
export default Login;