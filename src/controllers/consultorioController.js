import { Consultorio } from '../models/Consultorio.js';

// Obtener todos los consultorios
export const obtenerTodosLosConsultorios = async (req, res) => {
  try {
    const consultorios = await Consultorio.findAll();
    res.json(consultorios);
  } catch (error) {
    console.error('Error obteniendo consultorios:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Crear un consultorio
export const crearConsultorio = async (req, res) => {
  const { numero, ubicacion, idEspecialidad } = req.body;

  try {
    const nuevoConsultorio = await Consultorio.create({
      numero,
      ubicacion,
      idEspecialidad
    });

    res.json(nuevoConsultorio);
  } catch (error) {
    console.error('Error creando consultorio:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Actualizar un consultorio
export const actualizarConsultorio = async (req, res) => {
  const { id } = req.params;
  const { numero, ubicacion, idEspecialidad } = req.body;

  try {
    const consultorio = await Consultorio.findByPk(id);
    if (!consultorio) {
      return res.status(404).json({ error: 'Consultorio no encontrado' });
    }

    consultorio.numero = numero;
    consultorio.ubicacion = ubicacion;
    consultorio.idEspecialidad = idEspecialidad;

    await consultorio.save();
    res.json(consultorio);
  } catch (error) {
    console.error('Error actualizando consultorio:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Eliminar un consultorio
export const eliminarConsultorio = async (req, res) => {
  const { id } = req.params;

  try {
    const consultorio = await Consultorio.findByPk(id);
    if (!consultorio) {
      return res.status(404).json({ error: 'Consultorio no encontrado' });
    }

    await consultorio.destroy();
    res.json({ message: 'Consultorio eliminado correctamente' });
  } catch (error) {
    console.error('Error eliminando consultorio:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
