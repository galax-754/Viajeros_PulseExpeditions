import React from "react";
import { useNavigate } from "react-router-dom";

// Array de destinos disponibles con su información
const destinos = [
  {
    nombre: "Alpes Suizos",
    descripcion: "Paraíso del esquí y la escalada",
    imagen: "..//Aples suizos.jpg"
  },
  {
    nombre: "Costa Rica",
    descripcion: "Aventuras en la selva tropical",
    imagen: "..//Costa rica.jpg"
  },
  {
    nombre: "Islas Maldivas",
    descripcion: "El mejor buceo del mundo",
    imagen: "..//Islas Maldivas.jpg"
  }
];

// Componente que muestra la lista de destinos disponibles
// Cada destino incluye una imagen, nombre y descripción
export const Destinos = () => {
  // Hook para la navegación
  const navigate = useNavigate();

  // Función para manejar el clic en un destino
  const handleDestinoClick = (destino) => {
    // Navegar a la página de reserva y pasar el destino como estado
    navigate('/reservar', { state: { destinoSeleccionado: destino.nombre } });
  };

  return (
    <div className="destinos">
      {/* Título principal de la sección */}
      <h2 className="destinos__titulo">Destinos Populares</h2>
      {/* Grid que contiene las tarjetas de destinos */}
      <div className="destinos__grid">
        {/* Mapeo del array de destinos para crear una tarjeta por cada uno */}
        {destinos.map((destino, index) => (
          <div 
            key={index} 
            className="destino"
            onClick={() => handleDestinoClick(destino)}
            style={{ cursor: 'pointer' }}
          >
            <img src={destino.imagen} alt={destino.nombre} className="destino__imagen" />
            <h3 className="destino__nombre">{destino.nombre}</h3>
            <p className="destino__descripcion">{destino.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};