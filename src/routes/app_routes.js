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
      <Route path="/ciberseguridad" element={<HomePage />} />
      <Route path="/ciberseguridad/ataques" element={<AttacksPage />} />
      <Route path="/ciberseguridad/confidencialidad" element={<ConfidentialityPage />} />
      <Route path="/ciberseguridad/principios" element={<PrinciplesPage />} />
    </Routes>
  );
};

export default AppRoutes;