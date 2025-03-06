"use client";
// client/src/register.jsx

import { useState, useEffect } from 'react'
import './App.css'

function Register() {
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);


  return (
    <>
      <form>
        <input type='text' placeholder='Username'></input>
        <input type='text' placeholder='Password'></input>
        <input type='text' placeholder='First Name'></input>
        <input type='text' placeholder='Last Name'></input>
        <input type='number' placeholder='Phone Number'></input>
        <input type='text' placeholder='Address'></input>
        <input type="submit"></input>
      </form>
    </>
  )
}

export default Register