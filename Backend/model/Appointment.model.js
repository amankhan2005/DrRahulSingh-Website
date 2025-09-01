//  import mongoose from "mongoose";

// const appointmentSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     number: { type: String, required: true }, // frontend me phone => backend me number
//     email: { type: String, required: true },
//     department: { type: String, required: true },
//     date: { type: String, required: true },
//     time: { type: String, required: true },
//   },
//   { timestamps: true }
// );

// const Appointment = mongoose.model("Appointment", appointmentSchema);
// export default Appointment;
// Appointment.model.js
  
 import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    number: { type: String, required: true },
    email: { type: String, required: true },
    department: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    status: { type: String, default: "Pending" },
  },
  { timestamps: true }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);
export default Appointment;
