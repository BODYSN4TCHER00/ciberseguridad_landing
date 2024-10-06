import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import colors from '../../assets/theme/theme';

// Barra de navegacion 
const Navbar = () => {
  const location = useLocation();

  const isActive = (to: string) => location.pathname === to;

  return (
    <nav style={{ backgroundColor: colors.background }} className="shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div
          style={{ color: colors.textLight }}
          className="text-xl font-bold hover:text-accent transition-colors"
        >
          ALUMNO: CUMPLIDO HERRERA DIEGO
        </div>

        {/* Menú de Navegación */}
        <div className="hidden md:flex space-x-8">
          <NavLink
            to="/ciberseguridad"
            style={{ color: isActive('/ciberseguridad') ? colors.accent : colors.textDark }}
            className={`hover:text-accent transition-colors pb-2 ${
              isActive('/ciberseguridad') ? 'border-b-2' : ''
            }`}
          >
            Menu
          </NavLink>
          <NavLink
            to="/ciberseguridad/ataques"
            style={{ color: isActive('/ciberseguridad/ataques') ? colors.accent : colors.textDark }}
            className={`hover:text-accent transition-colors pb-2 ${
              isActive('/ciberseguridad/ataques') ? 'border-b-2' : ''
            }`}
          >
            Ataques
          </NavLink>
          <NavLink
            to="/ciberseguridad/confidencialidad"
            style={{ color: isActive('/ciberseguridad/confidencialidad') ? colors.accent : colors.textDark }}
            className={`hover:text-accent transition-colors pb-2 ${
              isActive('/ciberseguridad/confidencialidad') ? 'border-b-2' : ''
            }`}
          >
            Confidencialidad
          </NavLink>
          <NavLink
            to="/ciberseguridad/principios"
            style={{ color: isActive('/ciberseguridad/principios') ? colors.accent : colors.textDark }}
            className={`hover:text-accent transition-colors pb-2 ${
              isActive('/ciberseguridad/principios') ? 'border-b-2' : ''
            }`}
          >
            Principios
          </NavLink>
        </div>

        {/* Botón de menú para versión móvil */}
        <div className="md:hidden">
          <button
            style={{ color: colors.textDark }}
            className="hover:text-accent focus:outline-none focus:text-accent"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
