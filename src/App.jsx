import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Holdings from './pages/Holdings';
import Experience from './pages/Onboarding/Experience';
import Tax from './pages/Onboarding/Tax';
import Tooltips from './pages/Onboarding/Tooltips';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/holdings' element={<Holdings />} />
        <Route path='/onboarding/experience' element={<Experience />} />
        <Route path='/onboarding/tax' element={<Tax />} />
        <Route path='/onboarding/tooltips' element={<Tooltips />} />
      </Routes>
    </BrowserRouter>
  );
}