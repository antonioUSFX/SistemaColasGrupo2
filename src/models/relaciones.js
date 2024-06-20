// Importar todos los modelos
import { Asistente } from './Asistente.js';
import { Consultorio } from './Consultorio.js';
import { Especialidad } from './Especialidad.js';
import { Medico } from './Medico.js';
import { Paciente } from './Paciente.js';
import { Ticket } from './Ticket.js';
import { TipoTicket } from './TipoTicket.js';


// Relaciones

// Un TipoTicket puede tener muchos Tickets
TipoTicket.hasMany(Ticket, {
  foreignKey: "idTipoTicket",
  sourceKey: "id",
});
Ticket.belongsTo(TipoTicket, {
  foreignKey: "idTipoTicket",
  targetKey: "id",
});

// Un TipoTicket puede pertenecer a varias Colas
// TipoTicket.hasMany(Cola, {
//   foreignKey: "idTipoTicket",
//   sourceKey: "id",
// });
// Cola.belongsTo(TipoTicket, {
//   foreignKey: "idTipoTicket",
//   targetKey: "id",
// });

// // Un Consultorio tiene muchas Colas
// Consultorio.hasMany(Cola, {
//   foreignKey: "idConsultorio",
//   sourceKey: "id",
// });
// Cola.belongsTo(Consultorio, {
//   foreignKey: "idConsultorio",
//   targetKey: "id",
// });

// Un Consultorio tiene una Especialidad (1 a 1)
Consultorio.belongsTo(Especialidad, {
  foreignKey: "idEspecialidad",
  targetKey: "id",
});
Especialidad.hasOne(Consultorio, {
  foreignKey: "idEspecialidad",
  sourceKey: "id",
});

// Un Medico tiene una Especialidad (1 a 1)
Medico.belongsTo(Especialidad, {
  foreignKey: "idEspecialidad",
  targetKey: "id",
});
Especialidad.hasOne(Medico, {
  foreignKey: "idEspecialidad",
  sourceKey: "id",
});

// Una Especialidad tiene muchos Ticket (1 a muchos)
Especialidad.hasMany(Ticket, {
  foreignKey: "idEspecialidad",
  sourceKey: "id",
});
Ticket.belongsTo(Especialidad, {
  foreignKey: "idEspecialidad",
  targetKey: "id",
});




// // Un Ticket puede pertenecer a un Paciente (muchos a uno)
// Ticket.belongsTo(Paciente, {
//   foreignKey: "idTipoPaciente", // Assuming "idTipoPaciente" refers to Paciente type
//   targetKey: "id",
// });
// Paciente.hasMany(Ticket, {
//   foreignKey: "idTipoPaciente",
//   sourceKey: "id",
// });
