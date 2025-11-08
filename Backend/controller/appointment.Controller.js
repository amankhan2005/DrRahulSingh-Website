 // controllers/appointment.controller.js
import Appointment from "../model/Appointment.model.js";
import { sendMail } from "../utils/sendMail.js";
import {
  userAppointmentReceivedTemplate,
  adminAppointmentTemplate,
  userAppointmentApprovedTemplate,
  adminApprovedTemplate,
} from "../utils/mailTemplates.js";

export const createAppointment = async (req, res) => {
  try {
    const { name, number, email, department, date, time } = req.body;

    if (!name || !number || !email || !department || !date || !time) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newAppointment = await Appointment.create(req.body);

    // Send both emails concurrently
    await Promise.all([
      sendMail({
        to: newAppointment.email,
        subject: "Appointment Received ✅",
        html: userAppointmentReceivedTemplate(newAppointment),
        text: `Hello ${newAppointment.name},\n\nYour appointment request for ${newAppointment.department} on ${newAppointment.date} at ${newAppointment.time} has been received. We will notify you once it's approved.\n\nTeam Landmark`,
      }),
      sendMail({
        to: process.env.ADMIN_EMAIL,
        subject: "🩺 New Appointment Request",
        html: adminAppointmentTemplate(newAppointment),
        text: `New appointment\nPatient: ${newAppointment.name}\nEmail: ${newAppointment.email}\nPhone: ${newAppointment.number}\nDepartment: ${newAppointment.department}\nDate: ${newAppointment.date}\nTime: ${newAppointment.time}`,
      }),
    ]);

    res
      .status(201)
      .json({ message: "Appointment booked successfully", data: newAppointment });
  } catch (error) {
    console.error("Create Appointment Error:", error);
    res
      .status(500)
      .json({ message: "Failed to book appointment", error: error.message });
  }
};

export const getAppointments = async (req, res) => {
  try {
    const { status, department } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (department) filter.department = department;

    const appointments = await Appointment.find(filter).sort({ createdAt: -1 });
    res.status(200).json({
      message: "Appointments fetched successfully",
      data: appointments,
    });
  } catch (error) {
    console.error("Get Appointments Error:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch appointments", error: error.message });
  }
};

export const getAppointmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await Appointment.findById(id);
    if (!appointment)
      return res.status(404).json({ message: "Appointment not found" });
    res.status(200).json({ message: "Appointment fetched", data: appointment });
  } catch (error) {
    res.status(500).json({ message: "Error fetching appointment", error });
  }
};

export const deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Appointment.findByIdAndDelete(id);
    if (!deleted)
      return res.status(404).json({ message: "Appointment not found" });
    res.status(200).json({ message: "Appointment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete appointment", error });
  }
};

export const approveAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await Appointment.findById(id);
    if (!appointment)
      return res.status(404).json({ message: "Appointment not found" });

    appointment.status = "Approved";
    await appointment.save();

    // Notify user and admin
    await Promise.all([
      sendMail({
        to: appointment.email,
        subject: "Your Appointment is Approved ✅",
        html: userAppointmentApprovedTemplate(appointment),
        text: `Hello ${appointment.name},\n\nYour appointment with ${appointment.department} on ${appointment.date} at ${appointment.time} has been approved.\n\nTeam Landmark`,
      }),
      sendMail({
        to: process.env.ADMIN_EMAIL,
        subject: `Appointment Approved: ${appointment.name}`,
        html: adminApprovedTemplate(appointment),
        text: `Appointment approved\nPatient: ${appointment.name}\nDepartment: ${appointment.department}\nDate: ${appointment.date}\nTime: ${appointment.time}`,
      }),
    ]);

    res
      .status(200)
      .json({ message: "Appointment approved successfully", data: appointment });
  } catch (error) {
    console.error("Approve Appointment Error:", error);
    res.status(500).json({ message: "Failed to approve appointment", error });
  }
};

export const updateAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const updated = await Appointment.findByIdAndUpdate(id, update, { new: true });
    if (!updated)
      return res.status(404).json({ message: "Appointment not found" });
    res.status(200).json({ message: "Appointment updated", data: updated });
  } catch (error) {
    res.status(500).json({ message: "Failed to update appointment", error });
  }
};
