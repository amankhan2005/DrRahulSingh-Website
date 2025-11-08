 import nodemailer from "nodemailer";
import Contact from "../model/contact.model.js";

export const createInquiry = async (req, res) => {
  const { department, patientName, mobileNo, email, message } = req.body;

  if (!department || !patientName || !mobileNo || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // ✅ Save to DB
    const newContact = new Contact({
      department,
      patientName,
      mobileNo,
      email,
      message,
    });
    await newContact.save();

    // ✅ Setup Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    // ✅ 1️⃣ Mail to ADMIN
    const adminMail = {
      from: `"Landmark Neurospine Hospital" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL, // from env file
      subject: `🧠 New Patient Inquiry - ${department}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border-radius: 10px; background: #f8f9fa;">
          <h2 style="color: #0056b3;">New Patient Inquiry Received</h2>
          <p><strong>Department:</strong> ${department}</p>
          <p><strong>Patient Name:</strong> ${patientName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mobile No:</strong> ${mobileNo}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="background: #fff; padding: 10px; border-left: 4px solid #007bff;">
            ${message}
          </blockquote>
          <p style="margin-top: 20px; font-size: 13px; color: #555;">
            Please respond to this inquiry as soon as possible.<br>
            <em>Landmark Advance Neurospine Care Superspeciality Hospital</em>
          </p>
        </div>
      `,
      text: `
        New Patient Inquiry

        Department: ${department}
        Patient: ${patientName}
        Email: ${email}
        Mobile: ${mobileNo}
        Message: ${message}
      `,
    };

    // ✅ 2️⃣ Mail to USER
    const userMail = {
      from: `"Landmark Neurospine Hospital" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `✅ Inquiry Confirmation - ${department} Department`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background: #f0f8ff; border-radius: 10px;">
          <h2 style="color: #007bff;">Hello ${patientName},</h2>
          <p>Thank you for reaching out to <strong>Landmark Advance Neurospine Care Superspeciality Hospital</strong>.</p>
          <p>Your inquiry has been successfully received in our <strong>${department}</strong> department.</p>
          <p>Here’s a summary of your message:</p>
          <blockquote style="background: #fff; padding: 10px; border-left: 4px solid #007bff;">
            ${message}
          </blockquote>
          <p>Our team will get back to you shortly.</p>
          <p style="margin-top: 20px;">Warm regards, <br><strong>Team Landmark Neurospine Hospital</strong></p>
          <hr style="margin-top: 20px;">
          <small style="color: #555;">This is an automated message. Please do not reply to this email.</small>
        </div>
      `,
      text: `
        Hello ${patientName},

        Thank you for contacting Landmark Advance Neurospine Care Superspeciality Hospital.
        Your inquiry in the ${department} department has been received.

        Message:
        ${message}

        We’ll get back to you shortly.
        - Team Landmark
      `,
    };

    // ✅ Send both emails concurrently
    await Promise.all([
      transporter.sendMail(adminMail),
      transporter.sendMail(userMail),
    ]);

    res.status(201).json({
      message: "Inquiry sent successfully!",
      Contact: newContact,
    });
  } catch (error) {
    console.error("Error creating inquiry:", error);
    res.status(500).json({ message: "Error creating inquiry", error });
  }
};

// ✅ Fetch all inquiries
export const getAllInquiry = async (req, res) => {
  try {
    const inquiry = await Contact.find();
    res.status(200).json(inquiry);
  } catch (error) {
    console.error("Error fetching inquiries:", error);
    res.status(500).json({ message: "Error fetching inquiries", error });
  }
};

// ✅ Delete inquiry
export const deleteInquiry = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedContact = await Contact.findByIdAndDelete(id);
    if (!deletedContact) {
      return res.status(404).json({ message: "Inquiry not found" });
    }
    res.status(200).json({ message: "Inquiry deleted successfully" });
  } catch (error) {
    console.error("Error deleting inquiry:", error);
    res.status(500).json({ message: "Error deleting inquiry", error });
  }
};
