import { Router } from 'express';
import {
  obtenerTodosLosConsultorios,
  crearConsultorio,
  actualizarConsultorio,
  eliminarConsultorio
} from '../controllers/consultorioController.js';

const router = Router();

router.get('/consultorios', obtenerTodosLosConsultorios);
router.post('/consultorios', crearConsultorio);
router.put('/consultorios/:id', actualizarConsultorio);
router.delete('/consultorios/:id', eliminarConsultorio);

export default router;
