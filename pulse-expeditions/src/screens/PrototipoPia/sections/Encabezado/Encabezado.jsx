// Componente de encabezado que contiene la navegación principal y el logo
// Implementa un menú hamburguesa para dispositivos móviles

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

// Lista de elementos de navegación con sus etiquetas y rutas
const navItems = [
  { label: "Explorar", href: "/" },
  { label: "Destinos", href: "/destinos" },
  { label: "Acerca de", href: "/acerca-de" },
  { label: "Planificar", href: "/planificar" },
  { label: "Mis Reservas", href: "/mis-reservas" },
];

export const Encabezado = () => {
  // Hook para la navegación programática
  const navigate = useNavigate();
  // Estado para controlar la visibilidad del menú móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para cerrar el menú después de hacer clic en un enlace
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="encabezado">
      {/* Logo y nombre de la empresa */}
      <div className="encabezado__marca">
        <div className="encabezado__logo" />
        <h1 className="encabezado__titulo">Pulse Expeditions</h1>
      </div>

      {/* Botón de menú hamburguesa para móviles */}
      <button className="encabezado__menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navegación principal */}
      <nav className={`encabezado__navegacion ${isMenuOpen ? 'encabezado__navegacion--abierto' : ''}`}>
        {navItems.map((item, index) => (
          <Link 
            key={index} 
            to={item.href} 
            className="encabezado__enlace"
            onClick={handleNavClick}
          >
            {item.label}
          </Link>
        ))}
        {/* Botón de reserva */}
        <button 
          className="encabezado__boton"
          onClick={() => {
            navigate('/reservar');
            handleNavClick();
          }}
        >
          Reservar Ahora
        </button>
      </nav>
    </header>
  );
};