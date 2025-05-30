import React from "react";

// Componente que muestra los pasos para planificar una aventura
// Incluye tres pasos principales del proceso de reserva
export const Planificar = () => {
  return (
    <div className="planificar">
      {/* Título principal de la sección */}
      <h2 className="planificar__titulo">Planifica tu Aventura</h2>
      {/* Contenedor de los pasos de planificación */}
      <div className="planificar__pasos">
        {/* Paso 1: Selección de destino */}
        <div className="paso">
          <h3>1. Elige tu Destino</h3>
          <p>Explora nuestra selección de destinos y encuentra el que mejor se adapte a tus deseos de aventura.</p>
        </div>
        {/* Paso 2: Selección de actividades */}
        <div className="paso">
          <h3>2. Selecciona las Actividades</h3>
          <p>Personaliza tu viaje eligiendo entre nuestra amplia gama de actividades extremas.</p>
        </div>
        {/* Paso 3: Proceso de reserva */}
        <div className="paso">
          <h3>3. Reserva tu Fecha</h3>
          <p>Elige las fechas que mejor te convengan y asegura tu lugar en la aventura.</p>
        </div>
      </div>
    </div>
  );
};