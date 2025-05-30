// Componente para gestionar las reservas del usuario
// Permite ver, editar y eliminar reservas existentes

import React from "react";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

export const MisReservas = () => {
  const navigate = useNavigate();
  // Estado local para las reservas
  const [reservas, setReservas] = React.useState(
    JSON.parse(localStorage.getItem('reservas') || '[]')
  );

  // Función para editar una reserva existente
  const handleEdit = (reserva, index) => {
    navigate('/reservar', { 
      state: { 
        editMode: true,
        reservaIndex: index,
        ...reserva 
      } 
    });
  };

  // Función para eliminar una reserva
  const handleDelete = (index) => {
    const nuevasReservas = reservas.filter((_, i) => i !== index);
    localStorage.setItem('reservas', JSON.stringify(nuevasReservas));
    setReservas(nuevasReservas);
    toast.success('Reserva eliminada con éxito');
  };

  return (
    <div className="mis-reservas">
      <h2 className="mis-reservas__titulo">Mis Reservas</h2>
      {reservas.length === 0 ? (
        <p className="mis-reservas__vacio">No tienes reservas activas.</p>
      ) : (
        <div className="mis-reservas__grid">
          {reservas.map((reserva, index) => (
            <div key={index} className="reserva-card">
              <h3 className="reserva-card__destino">{reserva.destino}</h3>
              <div className="reserva-card__detalles">
                <p><strong>Actividad:</strong> {reserva.actividad}</p>
                <p><strong>Fecha:</strong> {reserva.fecha}</p>
                <p><strong>Participantes:</strong> {reserva.participantes}</p>
                <p><strong>Contacto:</strong> {reserva.email}</p>
              </div>
              <div className="reserva-card__acciones">
                <button 
                  onClick={() => handleEdit(reserva, index)}
                  className="reserva-card__boton reserva-card__boton--editar"
                >
                  Editar
                </button>
                <button 
                  onClick={() => handleDelete(index)}
                  className="reserva-card__boton reserva-card__boton--eliminar"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};