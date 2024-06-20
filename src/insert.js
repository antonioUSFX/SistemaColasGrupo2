import { sequelize } from './database.js';
import { Medico } from './models/Medico.js';
import { Especialidad } from './models/Especialidad.js';
import { Ticket } from './models/Ticket.js';
import { Consultorio } from './models/Consultorio.js';
import { TipoTicket } from './models/TipoTicket.js';
// import { Cola } from './models/Cola.js';

async function seedDatabase() {
  try {
    // Sincronizar modelos
    await sequelize.sync({ force: true });

    // Crear tipos de tickets
    const tipoTicketSinSeguro = await TipoTicket.create({ nombre: 'Sin Seguro' });
    const tipoTicketConSeguro = await TipoTicket.create({ nombre: 'Con Seguro' });
    const tipoTicketVisitadorMedico = await TipoTicket.create({ nombre: 'Visitador Medico' });

    // Crear especialidades
    const especialidadCardiologia = await Especialidad.create({ nombre: 'Cardiología' });
    const especialidadPediatria = await Especialidad.create({ nombre: 'Pediatría' });
    const especialidadDermatologia = await Especialidad.create({ nombre: 'Dermatología' });

    // Crear consultorios
    const consultorioCardiologia = await Consultorio.create({ numero: 101, ubicacion:'Planta  Baja, Entrada', idEspecialidad: especialidadCardiologia.id });
    const consultorioPediatria = await Consultorio.create({ numero: 205, ubicacion:'Segundo Piso, Cerca Gradas' ,idEspecialidad: especialidadPediatria.id });
    const consultorioDermatologia = await Consultorio.create({ numero: 108, ubicacion:'Planta Baja, Fondo Pasillo',idEspecialidad: especialidadDermatologia.id });

    // Crear colas para cada consultorio
    // const colas = [];

    // // Cardiología
    // colas.push(await Cola.create({ idConsultorio: consultorioCardiologia.id, idTipoTicket: tipoTicketSinSeguro.id }));
    // colas.push(await Cola.create({ idConsultorio: consultorioCardiologia.id, idTipoTicket: tipoTicketConSeguro.id }));
    // colas.push(await Cola.create({ idConsultorio: consultorioCardiologia.id, idTipoTicket: tipoTicketVisitadorMedico.id }));

    // // Pediatría
    // colas.push(await Cola.create({ idConsultorio: consultorioPediatria.id, idTipoTicket: tipoTicketSinSeguro.id }));
    // colas.push(await Cola.create({ idConsultorio: consultorioPediatria.id, idTipoTicket: tipoTicketConSeguro.id }));
    // colas.push(await Cola.create({ idConsultorio: consultorioPediatria.id, idTipoTicket: tipoTicketVisitadorMedico.id }));

    // // Dermatología
    // colas.push(await Cola.create({ idConsultorio: consultorioDermatologia.id, idTipoTicket: tipoTicketSinSeguro.id }));
    // colas.push(await Cola.create({ idConsultorio: consultorioDermatologia.id, idTipoTicket: tipoTicketConSeguro.id }));
    // colas.push(await Cola.create({ idConsultorio: consultorioDermatologia.id, idTipoTicket: tipoTicketVisitadorMedico.id }));

    // Crear médicos
    const medicoJuanPerez = await Medico.create({
      nombre: 'Juan Perez',
      ci: '12345678',
      celular: '555123456',
      email: 'juan.perez@example.com',
      usuario: 'juanp',
      password: 'password123',
      direccion: '123 Main St',
      registroColMedico: 'REG123',
      idEspecialidad: especialidadCardiologia.id
    });

    const medicoMariaGonzalez = await Medico.create({
      nombre: 'Maria Gonzalez',
      ci: '98765432',
      celular: '555987654',
      email: 'maria.gonzalez@example.com',
      usuario: 'mariag',
      password: 'password456',
      direccion: '456 Oak St',
      registroColMedico: 'REG456',
      idEspecialidad: especialidadPediatria.id
    });

    const medicoCarlosLopez = await Medico.create({
      nombre: 'Carlos Lopez',
      ci: '45678901',
      celular: '555123789',
      email: 'carlos.lopez@example.com',
      usuario: 'carlosl',
      password: 'password789',
      direccion: '789 Pine St',
      registroColMedico: 'REG789',
      idEspecialidad: especialidadDermatologia.id
    });

    // Crear tickets
    const ticketsData = [
        { numeroEnCola: 1, fecha: '2024-06-01', estado: 'en espera', idEspecialidad: especialidadCardiologia.id, idTipoTicket: tipoTicketSinSeguro.id },
        { numeroEnCola: 2, fecha: '2024-06-01', estado: 'en espera', idEspecialidad: especialidadCardiologia.id, idTipoTicket: tipoTicketSinSeguro.id },
        { numeroEnCola: 3, fecha: '2024-06-01', estado: 'en espera', idEspecialidad: especialidadCardiologia.id, idTipoTicket: tipoTicketSinSeguro.id },
        { numeroEnCola: 4, fecha: '2024-06-01', estado: 'en espera', idEspecialidad: especialidadCardiologia.id, idTipoTicket: tipoTicketSinSeguro.id },

        { numeroEnCola: 1, fecha: '2024-06-01', estado: 'en espera', idEspecialidad: especialidadCardiologia.id, idTipoTicket: tipoTicketConSeguro.id },
        { numeroEnCola: 2, fecha: '2024-06-01', estado: 'en espera', idEspecialidad: especialidadCardiologia.id, idTipoTicket: tipoTicketConSeguro.id },
        { numeroEnCola: 3, fecha: '2024-06-01', estado: 'en espera', idEspecialidad: especialidadCardiologia.id, idTipoTicket: tipoTicketConSeguro.id },

        { numeroEnCola: 1, fecha: '2024-06-01', estado: 'en espera', idEspecialidad: especialidadCardiologia.id, idTipoTicket: tipoTicketVisitadorMedico.id },


        { numeroEnCola: 1, fecha: '2024-05-29', estado: 'atentido', idEspecialidad: especialidadCardiologia.id, idTipoTicket: tipoTicketSinSeguro.id },
        { numeroEnCola: 2, fecha: '2024-05-29', estado: 'atentido', idEspecialidad: especialidadCardiologia.id, idTipoTicket: tipoTicketSinSeguro.id },
        { numeroEnCola: 3, fecha: '2024-05-29', estado: 'atentido', idEspecialidad: especialidadCardiologia.id, idTipoTicket: tipoTicketSinSeguro.id },
        { numeroEnCola: 4, fecha: '2024-05-29', estado: 'atentido', idEspecialidad: especialidadCardiologia.id, idTipoTicket: tipoTicketSinSeguro.id },

        { numeroEnCola: 1, fecha: '2024-05-29', estado: 'atentido', idEspecialidad: especialidadCardiologia.id, idTipoTicket: tipoTicketConSeguro.id },
        { numeroEnCola: 2, fecha: '2024-05-29', estado: 'atentido', idEspecialidad: especialidadCardiologia.id, idTipoTicket: tipoTicketConSeguro.id },
        { numeroEnCola: 3, fecha: '2024-05-29', estado: 'atentido', idEspecialidad: especialidadCardiologia.id, idTipoTicket: tipoTicketConSeguro.id },

        { numeroEnCola: 1, fecha: '2024-05-29', estado: 'atentido', idEspecialidad: especialidadCardiologia.id, idTipoTicket: tipoTicketVisitadorMedico.id },
        { numeroEnCola: 2, fecha: '2024-05-29', estado: 'atentido', idEspecialidad: especialidadCardiologia.id, idTipoTicket: tipoTicketVisitadorMedico.id },
        

      { numeroEnCola: 1, fecha: '2024-06-01', estado: 'en espera', idEspecialidad: especialidadPediatria.id, idTipoTicket: tipoTicketSinSeguro.id },
      { numeroEnCola: 2, fecha: '2024-06-01', estado: 'en espera', idEspecialidad: especialidadPediatria.id, idTipoTicket: tipoTicketSinSeguro.id },

      { numeroEnCola: 1, fecha: '2024-06-01', estado: 'en espera', idEspecialidad: especialidadPediatria.id, idTipoTicket: tipoTicketConSeguro.id },
      { numeroEnCola: 2, fecha: '2024-06-01', estado: 'en espera', idEspecialidad: especialidadPediatria.id, idTipoTicket: tipoTicketConSeguro.id },

      { numeroEnCola: 1, fecha: '2024-06-01', estado: 'en espera', idEspecialidad: especialidadPediatria.id, idTipoTicket: tipoTicketVisitadorMedico.id },
      { numeroEnCola: 2, fecha: '2024-06-01', estado: 'en espera', idEspecialidad: especialidadPediatria.id, idTipoTicket: tipoTicketVisitadorMedico.id },
      
      
      

        { numeroEnCola: 10, fecha: '2024-06-01', estado: 'en espera', idEspecialidad: especialidadDermatologia.id, idTipoTicket: tipoTicketSinSeguro.id },
        { numeroEnCola: 11, fecha: '2024-06-01', estado: 'en espera', idEspecialidad: especialidadDermatologia.id, idTipoTicket: tipoTicketSinSeguro.id },
        { numeroEnCola: 12, fecha: '2024-06-01', estado: 'en espera', idEspecialidad: especialidadDermatologia.id, idTipoTicket: tipoTicketSinSeguro.id },

        { numeroEnCola: 21, fecha: '2024-06-01', estado: 'en espera', idEspecialidad: especialidadDermatologia.id, idTipoTicket: tipoTicketConSeguro.id },
        { numeroEnCola: 22, fecha: '2024-06-01', estado: 'en espera', idEspecialidad: especialidadDermatologia.id, idTipoTicket: tipoTicketConSeguro.id },
        { numeroEnCola: 23, fecha: '2024-06-01', estado: 'en espera', idEspecialidad: especialidadDermatologia.id, idTipoTicket: tipoTicketConSeguro.id },

        { numeroEnCola: 10, fecha: '2024-06-01', estado: 'en espera', idEspecialidad: especialidadDermatologia.id, idTipoTicket: tipoTicketVisitadorMedico.id },
        { numeroEnCola: 11, fecha: '2024-06-01', estado: 'en espera', idEspecialidad: especialidadDermatologia.id, idTipoTicket: tipoTicketVisitadorMedico.id },
        
        
        
      
        
    ];

    for (const ticket of ticketsData) {
      await Ticket.create(ticket);
    }

    console.log('Datos insertados correctamente.');
  } catch (error) {
    console.error('Error insertando datos:', error);
  } finally {
    await sequelize.close();
  }
}

seedDatabase();
