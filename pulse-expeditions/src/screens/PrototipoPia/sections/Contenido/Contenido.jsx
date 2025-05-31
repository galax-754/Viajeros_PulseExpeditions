// Componente principal de la página de inicio
// Muestra el banner principal, buscador y actividades disponibles

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

// Lista de actividades disponibles con sus detalles
// Cada actividad tiene un nombre, imagen, descripción y destinos donde está disponible
const activities = [
  { 
    name: "Escalada", 
    image: "..//Escalada.jpg",
    description: "Desafía tus límites escalando las paredes más impresionantes",
    destinations: "Alpes Suizos, Costa Rica"
  },
  { 
    name: "Esquí", 
    image: "..//Esqui.jpg",
    description: "Deslízate por las mejores pistas nevadas del mundo",
    destinations: "Alpes Suizos"
  },
  { 
    name: "Paracaidismo", 
    image: "..//Paracaidismo.jpg",
    description: "Experimenta la adrenalina de saltar desde las alturas",
    destinations: "Costa Rica, Alpes Suizos"
  },
  { 
    name: "Rafting", 
    image: "..//Rafting.png",
    description: "Navega por rápidos emocionantes en ríos salvajes",
    destinations: "Costa Rica"
  },
  { 
    name: "Senderismo", 
    image: "..//Senderismo.jpg",
    description: "Explora rutas naturales con vistas espectaculares",
    destinations: "Alpes Suizos, Costa Rica"
  },
  { 
    name: "Surf", 
    image: "..//Surf.jpg",
    description: "Domina las olas en las mejores playas",
    destinations: "Costa Rica, Islas Maldivas"
  },
  { 
    name: "Puenting", 
    image: "..//Puente.png",
    description: "Siente la emoción del salto más extremo",
    destinations: "Alpes Suizos"
  },
  { 
    name: "Buceo", 
    image: "..//Buceo.jpg",
    description: "Descubre los secretos del mundo submarino",
    destinations: "Islas Maldivas, Costa Rica"
  },
];

// Lista de destinos disponibles para la búsqueda
const availableDestinations = [
  "Alpes Suizos",
  "Costa Rica",
  "Islas Maldivas"
];

export const Contenido = () => {
  // Estado para manejar el término de búsqueda ingresado por el usuario
  const [searchTerm, setSearchTerm] = useState("");
  // Estado para controlar la visibilidad del mensaje de destino no encontrado
  const [showMessage, setShowMessage] = useState(false);
  // Hook para la navegación entre páginas
  const navigate = useNavigate();

  // Función que maneja la búsqueda de destinos
  // Verifica si el destino existe y navega a la página correspondiente
  const handleSearch = () => {
    const searchTermLower = searchTerm.toLowerCase().trim();
    
    if (!searchTerm) return;

    // Busca el destino en la lista de destinos disponibles
    const found = availableDestinations.find(
      destination => destination.toLowerCase().includes(searchTermLower)
    );

    // Si encuentra el destino, navega a la página de destinos
    // Si no, muestra un mensaje de error
    if (found) {
      setShowMessage(false);
      navigate('/destinos');
    } else {
      setShowMessage(true);
    }
  };

  return (
    <main className="contenido">
      {/* Sección del banner principal con buscador */}
      <section className="hero">
        <div 
          className="hero__banner" 
          style={{backgroundImage: 'url(..//Fondo.png)'}}
        >
          <div className="hero__contenido">
            <h2 className="hero__titulo">Vive las Aventuras Más Extremas del Mundo</h2>
            {/* Buscador de destinos con icono y botón */}
            <div className="hero__busqueda">
              <div className="hero__busqueda-icono">
                <Search size={24} color="#607289" />
              </div>
              <input
                type="text"
                className="hero__busqueda-entrada"
                placeholder="¿A dónde a continuación?"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowMessage(false);
                }}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') handleSearch();
                }}
              />
              <button 
                className="hero__busqueda-boton"
                onClick={handleSearch}
              >
                Buscar
              </button>
            </div>
            {/* Mensaje de error cuando no se encuentra el destino */}
            {showMessage && (
              <div className="hero__mensaje">
                <p>Este destino no está disponible. Estamos trabajando para tener más destinos al alcance de tu mano.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Sección de actividades disponibles */}
      <section className="actividades">
        <h2 className="actividades__titulo">Actividades Destacadas</h2>
        {/* Grid de tarjetas de actividades */}
        <div className="actividades__grid">
          {activities.map((activity, index) => (
            <div key={index} className="actividad">
              <div className="actividad__contenedor">
                <img
                  src={activity.image}
                  alt={activity.name}
                  className="actividad__imagen"
                />
                <div className="actividad__info">
                  <h3 className="actividad__titulo">{activity.name}</h3>
                  <p className="actividad__descripcion">{activity.description}</p>
                  <p className="actividad__destinos">
                    <strong>Disponible en:</strong><br />
                    {activity.destinations}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};