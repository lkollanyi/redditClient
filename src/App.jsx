import { useState } from 'react'
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';  // Import Routes, Route, Link
import './App.css'
import AppLayout from './components/App Layout/AppLayout';

function App() {


  return (
    <Routes>
        <Route path="/" element={<AppLayout/>} >
          <Route path="/counter" element={<Counter />} />
        </Route>
    </Routes>
  )
}

export default App
