 import Appointment from "../model/Appointment.model.js";
import { sendMail } from "../utils/sendMail.js";

// ✅ Create new appointment
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
        html: `
          <h3>Hello ${newAppointment.name},</h3>
          <p>Your appointment request for <b>${newAppointment.department}</b> on <b>${newAppointment.date}</b> at <b>${newAppointment.time}</b> has been received.</p>
          <p>We will notify you once it’s approved.</p>
        `,
      }),
      sendMail({
        to: process.env.ADMIN_EMAIL,
        subject: "New Appointment Request",
        html: `
          <h3>New Appointment Request!</h3>
          <p><b>Name:</b> ${newAppointment.name}</p>
          <p><b>Phone:</b> ${newAppointment.number}</p>
          <p><b>Email:</b> ${newAppointment.email}</p>
          <p><b>Department:</b> ${newAppointment.department}</p>
          <p><b>Date:</b> ${newAppointment.date}</p>
          <p><b>Time:</b> ${newAppointment.time}</p>
        `,
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

// ✅ Get all appointments (optional filters)
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

// ✅ Get appointment by ID
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

// ✅ Delete appointment
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

// ✅ Approve appointment
export const approveAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await Appointment.findById(id);
    if (!appointment)
      return res.status(404).json({ message: "Appointment not found" });

    appointment.status = "Approved";
    await appointment.save();

    await Promise.all([
      sendMail({
        to: appointment.email,
        subject: "Your Appointment is Approved ✅",
        html: `
          <h3>Congratulations ${appointment.name}!</h3>
          <p>Your appointment with <b>${appointment.department}</b> on <b>${appointment.date}</b> at <b>${appointment.time}</b> has been approved.</p>
          <p>See you soon!</p>
        `,
      }),
      sendMail({
        to: process.env.ADMIN_EMAIL,
        subject: `Appointment Approved: ${appointment.name}`,
        html: `
          <h3>Appointment Approved!</h3>
          <p><b>Patient:</b> ${appointment.name}</p>
          <p><b>Department:</b> ${appointment.department}</p>
          <p><b>Date:</b> ${appointment.date}</p>
          <p><b>Time:</b> ${appointment.time}</p>
        `,
      }),
    ]);

    res
      .status(200)
      .json({ message: "Appointment approved successfully", data: appointment });
  } catch (error) {
    res.status(500).json({ message: "Failed to approve appointment", error });
  }
};

// ✅ Update appointment (optional)
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
