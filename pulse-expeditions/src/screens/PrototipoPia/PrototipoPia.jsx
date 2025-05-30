// Componente principal que estructura toda la aplicación
// Maneja el enrutamiento y la disposición general de los elementos

import React from "react";
import { Routes, Route } from "react-router-dom";
import { Encabezado } from "./sections/Encabezado";
import { Contenido } from "./sections/Contenido"; 
import { PiePagina } from "./sections/PiePagina";
import { Destinos } from "./pages/Destinos.jsx";
import { AcercaDe } from "./pages/AcercaDe.jsx";
import { Planificar } from "./pages/Planificar.jsx";
import { Reservar } from "./pages/Reservar.jsx";
import { MisReservas } from "./pages/MisReservas.jsx";
import { Toaster } from 'react-hot-toast';

export const PrototipoPia = () => {
  return (
    // Contenedor principal de la página
    <div className="pagina">
      <Toaster position="top-right" />
      <div className="pagina__contenedor">
        <div className="pagina__contenido">
          {/* Encabezado que se muestra en todas las páginas */}
          <Encabezado />
          
          {/* Sistema de rutas para la navegación entre páginas */}
          <Routes>
            {/* Ruta principal que muestra el contenido de inicio */}
            <Route path="/" element={<Contenido />} />
            {/* Ruta para la página de destinos */}
            <Route path="/destinos" element={<Destinos />} />
            {/* Ruta para la página de información sobre la empresa */}
            <Route path="/acerca-de" element={<AcercaDe />} />
            {/* Ruta para la página de planificación de viajes */}
            <Route path="/planificar" element={<Planificar />} />
            {/* Ruta para la página de reservas */}
            <Route path="/reservar" element={<Reservar />} />
            {/* Ruta para ver las reservas realizadas */}
            <Route path="/mis-reservas" element={<MisReservas />} />
          </Routes>
          
          {/* Pie de página que se muestra en todas las páginas */}
          <PiePagina />
        </div>
      </div>
    </div>
  );
};