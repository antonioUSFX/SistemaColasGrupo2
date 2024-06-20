// src/controllers/ticketController.js
import { Ticket } from '../models/Ticket.js';
import { Especialidad } from '../models/Especialidad.js';
import { Medico } from '../models/Medico.js';
import { sequelize } from '../database.js'; // Importar la instancia de Sequelize

export const emitirTicket = async (req, res) => {
  const { tipoTicketId, especialidadId } = req.body;

  try {
    // Obtener la especialidad seleccionada
    const especialidad = await Especialidad.findByPk(especialidadId);
    if (!especialidad) {
      return res.status(404).json({ error: 'Especialidad no encontrada' });
    }

    // Obtener el número de ticket más alto actual en la cola para la especialidad y tipo de ticket
    const maxNumeroEnColaResult = await sequelize.query(
      `SELECT MAX(numeroEnCola) AS maxNumeroEnCola FROM tickets WHERE idEspecialidad = ? AND idTipoTicket = ?`,
      {
        replacements: [especialidadId, tipoTicketId],
        type: sequelize.QueryTypes.SELECT
      }
    );

    const maxNumeroEnCola = maxNumeroEnColaResult[0].maxNumeroEnCola || 0;
    const nuevoNumeroEnCola = maxNumeroEnCola + 1;

    // Crear el nuevo ticket
    const nuevoTicket = await Ticket.create({
      numeroEnCola: nuevoNumeroEnCola,
      fecha: new Date().toISOString().split('T')[0], // Fecha actual
      estado: 'en espera', // Estado inicial del ticket
      idEspecialidad: especialidadId,
      idTipoTicket: tipoTicketId
    });

    res.json(nuevoTicket);
  } catch (error) {
    console.error('Error emitiendo ticket:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const obtenerTicketsAtendidos = async (req, res) => {
  const { fecha, medicoId } = req.params;

  try {
    // Verificar que el médico existe
    const medico = await Medico.findByPk(medicoId);
    if (!medico) {
      return res.status(404).json({ error: 'Médico no encontrado' });
    }

    // Obtener los tickets atendidos en la fecha específica
    const tickets = await sequelize.query(
      `SELECT t.* 
       FROM tickets t 
       INNER JOIN especialidades e ON t.idEspecialidad = e.id 
       INNER JOIN medicos m ON e.id = m.idEspecialidad 
       WHERE m.id = ?
         AND t.estado = 'atentido'
         AND DATE(t.fecha) = ?`,
      {
        replacements: [medicoId, fecha],
        type: sequelize.QueryTypes.SELECT
      }
    );

    res.json(tickets);
  } catch (error) {
    console.error('Error obteniendo tickets atendidos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const llamarSiguienteTicket = async (req, res) => {
  const { idEspecialidad, idTipoTicket } = req.params;

  try {
    // Obtener el siguiente ticket en la cola de la especialidad y tipo de ticket especificados
    const siguienteTicket = await Ticket.findOne({
      where: {
        estado: 'en espera',
        idEspecialidad: idEspecialidad,
        idTipoTicket: idTipoTicket
      },
      order: [['numeroEnCola', 'ASC']] // Ordenar por numeroEnCola de manera ascendente
    });

    if (!siguienteTicket) {
      return res.status(404).json({ error: 'No hay tickets en espera para la especialidad y tipo de ticket especificados' });
    }

    // Cambiar el estado del siguiente ticket a 'llamado'
    siguienteTicket.estado = 'llamado';
    await siguienteTicket.save();

    res.json(siguienteTicket);
  } catch (error) {
    console.error('Error al llamar al siguiente ticket:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const cancelarTicket = async (req, res) => {
  const { numeroEnCola, tipoTicketId, especialidadId } = req.body;

  try {
    // Buscar el ticket en espera con el número en cola especificado
    const ticket = await Ticket.findOne({
      where: {
        estado: 'en espera',
        numeroEnCola,
        idTipoTicket: tipoTicketId,
        idEspecialidad: especialidadId,
      },
    });

    // Verificar si se encontró el ticket
    if (!ticket) {
      return res.status(404).json({ error: 'Ticket no encontrado en la cola en espera' });
    }

    // Cambiar el estado del ticket a 'cancelado'
    ticket.estado = 'cancelado';
    await ticket.save();

    res.json({ message: 'Ticket cancelado exitosamente' });
  } catch (error) {
    console.error('Error cancelando ticket:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};