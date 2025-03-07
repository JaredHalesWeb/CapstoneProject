// frontend/src/pages/Register.jsx
import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
const Register = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const handleRegister = async (formData) => {
    try {
      const response = await api.post('/auth/register', formData);
      setMessage(response.data.message);
      // Optionally navigate to the login page after registration.
      navigate('/login');
    } catch (error) {
      setMessage(error.response.data.message || 'Registration failed');
    }
  };
  return (
    <div>
      <h2>Register</h2>
      <AuthForm onSubmit={handleRegister} isRegister={true} />
      {message && <p>{message}</p>}
    </div>
  );
};
export default Register;