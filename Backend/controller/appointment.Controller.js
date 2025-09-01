//  import Appointment from "../model/Appointment.model.js";

// // Create appointment
// export const createAppointment = async (req, res) => {
//   try {
//     console.log(req.body)
//     const newAppointment = new Appointment(req.body);
//     await newAppointment.save();
//     res.status(201).json({ message: "Appointment booked successfully", data: newAppointment });
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ message: "Failed to book appointment", error: error.message });
//   }
// };

// // Get all appointments
// export const getAppointments = async (req, res) => {
//   try {
//     const appointments = await Appointment.find().sort({ createdAt: -1 });
//     res.status(200).json({ message: "Appointments fetched successfully", data: appointments });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch appointments", error: error.message });
//   }
// };

// // ✅ Delete appointment
// export const deleteAppointment = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleted = await Appointment.findByIdAndDelete(id);

//     if (!deleted) {
//       return res.status(404).json({ message: "Appointment not found" });
//     }

//     res.status(200).json({ message: "Appointment deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to delete appointment", error: error.message });
//   }
// };
 import Appointment from "../model/Appointment.model.js";
import { sendMail } from "../utils/sendMail.js";

// ✅ Create appointment
export const createAppointment = async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();

    // Email to patient
    await sendMail({
      to: newAppointment.email,
      subject: "Appointment Received ✅",
      html: `
        <h3>Hello ${newAppointment.name},</h3>
        <p>Your appointment request for <b>${newAppointment.department}</b> on <b>${newAppointment.date}</b> at <b>${newAppointment.time}</b> has been received.</p>
        <p>We will notify you once it’s approved.</p>
      `,
    });

    // Email to admin
    await sendMail({
      to: process.env.ADMIN_EMAIL,
      subject: "New Appointment Request",
      html: `
        <h3>New Appointment Request!</h3>
        <p><b>Patient Name:</b> ${newAppointment.name}</p>
        <p><b>Phone:</b> ${newAppointment.number}</p>
        <p><b>Email:</b> ${newAppointment.email}</p>
        <p><b>Department:</b> ${newAppointment.department}</p>
        <p><b>Date:</b> ${newAppointment.date}</p>
        <p><b>Time:</b> ${newAppointment.time}</p>
      `,
    });

    res.status(201).json({ message: "Appointment booked successfully, emails sent", data: newAppointment });
  } catch (error) {
    console.error("Create Appointment Error:", error);
    res.status(500).json({ message: "Failed to book appointment", error: error.message });
  }
};

// ✅ Get all appointments
export const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.status(200).json({ message: "Appointments fetched successfully", data: appointments });
  } catch (error) {
    console.error("Get Appointments Error:", error);
    res.status(500).json({ message: "Failed to fetch appointments", error: error.message });
  }
};

// ✅ Delete appointment
export const deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Appointment.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Appointment not found" });
    res.status(200).json({ message: "Appointment deleted successfully" });
  } catch (error) {
    console.error("Delete Appointment Error:", error);
    res.status(500).json({ message: "Failed to delete appointment", error: error.message });
  }
};

// ✅ Approve appointment
export const approveAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Approve Appointment ID:", id);

    const appointment = await Appointment.findById(id);
    if (!appointment) return res.status(404).json({ message: "Appointment not found" });

    appointment.status = "Approved";
    await appointment.save();

    // Email to patient
    await sendMail({
      to: appointment.email,
      subject: "Your Appointment is Approved ✅",
      html: `
        <h3>Congratulations ${appointment.name}!</h3>
        <p>Your appointment with <b>${appointment.department}</b> on <b>${appointment.date}</b> at <b>${appointment.time}</b> has been approved.</p>
        <p>See you soon!</p>
      `,
    });

    // Email to admin
    await sendMail({
      to: process.env.ADMIN_EMAIL,
      subject: `Appointment Approved: ${appointment.name}`,
      html: `
        <h3>Appointment Approved!</h3>
        <p><b>Patient Name:</b> ${appointment.name}</p>
        <p><b>Department:</b> ${appointment.department}</p>
        <p><b>Date:</b> ${appointment.date}</p>
        <p><b>Time:</b> ${appointment.time}</p>
      `,
    });

    res.status(200).json({ message: "Appointment approved, emails sent to patient and admin", data: appointment });
  } catch (error) {
    console.error("Approve Appointment Error:", error);
    res.status(500).json({ message: "Failed to approve appointment", error: error.message });
  }
};
