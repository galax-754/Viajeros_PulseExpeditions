import React from "react";

// Componente que muestra la información sobre la empresa
// Incluye una descripción general y estadísticas importantes
export const AcercaDe = () => { //Declaro un componente
  return (
    <div className="acerca">
      {/* Título principal de la sección */}
      <h2 className="acerca__titulo">Sobre Pulse Expeditions</h2>
      <div className="acerca__contenido">
        {/* Párrafo introductorio que describe la historia y misión de la empresa */}
        <p>
          Fundada en 2020, Pulse Expeditions nació de la pasión por la aventura y el deseo de hacer los deportes extremos accesibles a todos. Nuestra misión es proporcionar experiencias únicas y seguras que desafíen tus límites y creen recuerdos inolvidables.
        </p>
        {/* Sección de estadísticas que muestra los logros de la empresa */}
        <div className="acerca__estadisticas">
          {/* Cada div representa una estadística importante */}
          <div className="estadistica">
            <h3>10,000+</h3>
            <p>Aventureros Satisfechos</p>
          </div>
          <div className="estadistica">
            <h3>50+</h3>
            <p>Destinos Globales</p>
          </div>
          <div className="estadistica">
            <h3>100%</h3>
            <p>Compromiso con la Seguridad</p>
          </div>
        </div>
      </div>
    </div>
  );
};