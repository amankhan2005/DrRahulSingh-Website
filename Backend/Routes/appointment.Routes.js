 import express from "express";
import {
  createAppointment,
  getAppointments,
  getAppointmentById,
  deleteAppointment,
  approveAppointment,
  updateAppointment,
} from "../controller/appointment.Controller.js";

const router = express.Router();

// Optional auth middleware (for admin routes)
const isAdmin = (req, res, next) => {
  // You can later add JWT/Role check here
  next();
};

// Routes
router.post("/", createAppointment);
router.get("/", getAppointments);
router.get("/:id", getAppointmentById);
router.patch("/:id", updateAppointment);
router.delete("/:id", isAdmin, deleteAppointment);
router.put("/approve/:id", isAdmin, approveAppointment);

export default router;
