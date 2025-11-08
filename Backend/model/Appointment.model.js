import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    number: { type: String, required: true, minlength: 10, maxlength: 15 },
    email: {
      type: String,
      required: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
    department: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    status: {
      type: String,
      enum: ["Pending", "Approved", "Cancelled"],
      default: "Pending",
    },
    notes: { type: String, default: "" },
  },
  { timestamps: true }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);
export default Appointment;
