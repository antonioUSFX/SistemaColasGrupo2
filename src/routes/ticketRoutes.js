// src/routes/ticketRoutes.js
import { Router } from 'express';
import { emitirTicket, obtenerTicketsAtendidos, llamarSiguienteTicket, cancelarTicket } from '../controllers/ticketController.js';

const router = Router();

router.post('/tickets/emitir-ticket', emitirTicket);
router.get('/tickets/tickets-atendidos/:fecha/:medicoId', obtenerTicketsAtendidos);
router.post('/tickets/llamar-siguiente-ticket/:idEspecialidad/:idTipoTicket', llamarSiguienteTicket);
router.post('/tickets/cancelar-ticket', cancelarTicket);

export default router;
