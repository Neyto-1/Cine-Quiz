import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import BlindTest from './pages/BlindTest';
import Register from './pages/Register';
import Login from './pages/Login';


export default function App() {
  return ( 
  <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/" element={<BlindTest />} />
    </Routes>
  </BrowserRouter>
  );
}