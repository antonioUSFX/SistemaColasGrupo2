import { Medico } from '../models/Medico.js';

export const obtenerTodosLosMedicos = async (req, res) => {
  try {
    const medicos = await Medico.findAll();
    res.json(medicos);
  } catch (error) {
    console.error('Error obteniendo médicos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


export const crearMedico = async (req, res) => {
  const {
    nombre,
    ci,
    celular,
    email,
    usuario,
    password,
    direccion,
    registroColMedico,
    especialidadId
  } = req.body;

  try {
    const nuevoMedico = await Medico.create({
      nombre,
      ci,
      celular,
      email,
      usuario,
      password,
      direccion,
      registroColMedico,
      idEspecialidad: especialidadId
    });

    res.json(nuevoMedico);
  } catch (error) {
    console.error('Error creando médico:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const actualizarMedico = async (req, res) => {
  const { id } = req.params;
  const {
    nombre,
    ci,
    celular,
    email,
    usuario,
    password,
    direccion,
    registroColMedico,
    especialidadId
  } = req.body;

  try {
    const medico = await Medico.findByPk(id);
    if (!medico) {
      return res.status(404).json({ error: 'Médico no encontrado' });
    }

    await medico.update({
      nombre,
      ci,
      celular,
      email,
      usuario,
      password,
      direccion,
      registroColMedico,
      idEspecialidad: especialidadId
    });

    res.json(medico);
  } catch (error) {
    console.error('Error actualizando médico:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const eliminarMedico = async (req, res) => {
  const { id } = req.params;

  try {
    const medico = await Medico.findByPk(id);
    if (!medico) {
      return res.status(404).json({ error: 'Médico no encontrado' });
    }

    await medico.destroy();

    res.json({ message: 'Médico eliminado correctamente' });
  } catch (error) {
    console.error('Error eliminando médico:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
