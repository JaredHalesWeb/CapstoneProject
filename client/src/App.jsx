"use client";
// client/src/App.jsx

import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  const handleClick = (name) => {
    
  };

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);


  return (

      <form>
        <input type='text' placeholder='Username' required></input>
        <input type='text' placeholder='Password' required></input>
        <input type="submit"></input>
        <p>Don't have an account? <span onClick={() => handleClick('Register')}>Register here</span></p>
        
      </form>
  )
}

export default App