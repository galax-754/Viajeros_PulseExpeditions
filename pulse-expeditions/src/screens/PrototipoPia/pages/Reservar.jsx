// Componente para crear y editar reservas
// Maneja tanto nuevas reservas como la edición de reservas existentes

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

export const Reservar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Estado del formulario con los campos necesarios
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    destino: "",
    fecha: "",
    actividad: "",
    participantes: "1"
  });

  // Efecto para cargar datos cuando se está editando una reserva
  useEffect(() => {
    if (location.state) { 
      setFormData({
        nombre: location.state.nombre || "",
        email: location.state.email || "",
        destino: location.state.destino || "",
        fecha: location.state.fecha || "",
        actividad: location.state.actividad || "",
        participantes: location.state.participantes || "1"
      });
    }
  }, [location.state]);

  // Manejador del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const reservasActuales = JSON.parse(localStorage.getItem('reservas') || '[]');
    
    if (location.state?.editMode) {
      // Actualizar reserva existente
      reservasActuales[location.state.reservaIndex] = formData;
      toast.success('Reserva actualizada con éxito');
    } else {
      // Crear nueva reserva
      reservasActuales.push(formData);
      toast.success('Reserva confirmada con éxito');
    }
    
    localStorage.setItem('reservas', JSON.stringify(reservasActuales));

    // Redireccionar después de guardar
    setTimeout(() => {
      navigate('/mis-reservas');
    }, 2000);
  };

  // Manejador de cambios en los campos del formulario
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value //Asignmos nuevo valor
    });
  };

  return (
    <div className="reservar">
      <h2 className="reservar__titulo">
        {location.state?.editMode ? 'Editar Reserva' : 'Reserva tu Aventura'}
      </h2>
      <form onSubmit={handleSubmit} className="reservar__formulario">
        <div className="campo">
          <label htmlFor="nombre">Nombre completo</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="destino">Destino</label>
          <select
            id="destino"
            name="destino"
            value={formData.destino}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona un destino</option>
            <option value="Alpes Suizos">Alpes Suizos</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Islas Maldivas">Islas Maldivas</option>
          </select>
        </div>
        <div className="campo">
          <label htmlFor="fecha">Fecha preferida</label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="actividad">Actividad</label>
          <select
            id="actividad"
            name="actividad"
            value={formData.actividad}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona una actividad</option>
            <option value="Escalada">Escalada</option>
            <option value="Esquí">Esquí</option>
            <option value="Paracaidismo">Paracaidismo</option>
            <option value="Rafting">Rafting</option>
            <option value="Senderismo">Senderismo</option>
            <option value="Surf">Surf</option>
            <option value="Puenting">Puenting</option>
            <option value="Buceo">Buceo</option>
          </select>
        </div>
        <div className="campo">
          <label htmlFor="participantes">Número de participantes</label>
          <input
            type="number"
            id="participantes"
            name="participantes"
            min="1"
            max="10"
            value={formData.participantes}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="reservar__boton">
          {location.state?.editMode ? 'Guardar Cambios' : 'Confirmar Reserva'}
        </button>
      </form>
    </div>
  );
};