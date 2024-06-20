import { Router } from 'express';
import { obtenerTodosLosMedicos,crearMedico, actualizarMedico, eliminarMedico } from '../controllers/medicoController.js';

const router = Router();

router.get('/medicos', obtenerTodosLosMedicos);
router.post('/medicos', crearMedico);
router.put('/medicos/:id', actualizarMedico);
router.delete('/medicos/:id', eliminarMedico);


export default router;
