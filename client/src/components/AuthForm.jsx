// frontend/src/components/AuthForm.jsx
import React, { useState } from 'react';

const AuthForm = ({ onSubmit, isRegister }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    telephone: '',
    address: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md w-full mx-auto p-6 bg-gray-800 rounded shadow-md">
      {isRegister && (
        <>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border border-gray-600 p-2 rounded mb-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border border-gray-600 p-2 rounded mb-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border border-gray-600 p-2 rounded mb-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="telephone"
            placeholder="Telephone"
            value={formData.telephone}
            onChange={handleChange}
            className="w-full border border-gray-600 p-2 rounded mb-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-gray-600 p-2 rounded mb-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </>
      )}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border border-gray-600 p-2 rounded mb-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full border border-gray-600 p-2 rounded mb-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors"
      >
        {isRegister ? 'Register' : 'Login'}
      </button>
    </form>
  );
};

export default AuthForm;
