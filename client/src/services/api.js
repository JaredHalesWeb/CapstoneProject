// frontend/src/services/api.js
const API_URL = import.meta.env.VITE_API_URL;
const api = {
  post: async (endpoint, data) => {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'API error');
    }
    return response.json();
  },
  // Additional methods (get, put, delete) can be added as needed.
};
export default api;