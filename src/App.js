import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/common/Navbar.tsx';
import AppRoutes from './routes/app_routes';

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      {/* Contenido que cambia con las rutas */}
      <div className="App">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
