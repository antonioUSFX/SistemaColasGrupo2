import express from 'express';
import ticketRoutes from './routes/ticketRoutes.js';
import medicoRoutes from './routes/medicoRoutes.js';
import consultorioRoutes from './routes/consultorioRoutes.js';

const app = express();
app.use(express.json());

// Rutas
app.use('/api', ticketRoutes);
app.use('/api', medicoRoutes); // Agrega las rutas de los médicos
app.use('/api', consultorioRoutes); // Agrega las rutas de los consultorios

export default app;
