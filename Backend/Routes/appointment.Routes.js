//  import express from "express";
// import { createAppointment, getAppointments, deleteAppointment } from "../controller/appointment.Controller.js"

// const router = express.Router();

// // Create appointment
// router.post("/create", createAppointment);

// // Get all appointments
// router.get("/getall", getAppointments);

// // ✅ Delete appointment by ID
// router.delete("/delete/:id", deleteAppointment);

// export default router;

 import express from "express";
import {
  createAppointment,
  getAppointments,
  deleteAppointment,
  approveAppointment
} from "../controller/appointment.Controller.js";

const router = express.Router();

router.post("/create", createAppointment);
router.get("/getall", getAppointments);
router.delete("/delete/:id", deleteAppointment);
router.post("/approve/:id", approveAppointment); // POST for approve

export default router;


 