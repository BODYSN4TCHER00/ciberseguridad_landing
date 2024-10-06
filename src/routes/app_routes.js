import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AttacksPage from '../pages/AttacksPage.tsx';
import PrinciplesPage from '../pages/PrinciplesPage.tsx';
import ConfidentialityPage from '../pages/ConfidentialityPage.tsx';

// Rutas de las diferentes pantallas de la app 
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ataques" element={<AttacksPage />} />
      <Route path="/confidencialidad" element={<ConfidentialityPage />} />
      <Route path="/principios" element={<PrinciplesPage />} />
    </Routes>
  );
};

export default AppRoutes;
