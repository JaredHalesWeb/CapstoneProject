// frontend/src/services/api.js
const API_URL = import.meta.env.VITE_API_URL;
console.log('API_URL:', API_URL);

const api = {
  post: async (endpoint, data) => {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const text = await response.text();
    let responseData;
    try {
      responseData = text ? JSON.parse(text) : {};
    } catch (error) {
      responseData = {};
    }
    if (!response.ok) {
      throw new Error(responseData.message || 'API error');
    }
    return responseData;
  },
};

export default api;
