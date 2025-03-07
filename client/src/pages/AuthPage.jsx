// frontend/src/pages/AuthPage.jsx
import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      const endpoint = isRegister ? '/auth/register' : '/auth/login';
      const response = await api.post(endpoint, formData);
      setMessage(response.message);

      if (!isRegister) {
        // Successful login: navigate to profile page.
        navigate('/profile');
      } else {
        // Successful registration: switch back to login mode.
        setIsRegister(false);
      }
    } catch (error) {
      setMessage(error.message || 'An error occurred.');
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-4">
        {isRegister ? 'Register' : 'Login'}
      </h2>
      <AuthForm onSubmit={handleSubmit} isRegister={isRegister} />
      {message && <p className="mt-4 text-red-400">{message}</p>}
      <div className="mt-4">
        {isRegister ? 'Already have an account? ' : "Don't have an account? "}
        <button
          className="text-blue-400 hover:underline"
          onClick={() => {
            setIsRegister(!isRegister);
            setMessage('');
          }}
        >
          {isRegister ? 'Login' : 'Register'}
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
