 // routes/appointmentRoutes.js
import express from 'express';
import { createAppointment, getAllAppointments, deleteAppointment } from '../controller/Inquiry.controller.js';

const router = express.Router();

// Create a new appointment
router.post('/save', createAppointment);

// Get all appointments
router.get('/getall', getAllAppointments);

// Delete an appointment by ID
router.delete('/delete/:id', deleteAppointment);

export default router;
