// utils/mailTemplates.js

export const userAppointmentReceivedTemplate = (appointment) => {
  return `
  <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: auto; background: #f9fbfd; border-radius: 10px; padding: 30px;">
    <div style="text-align: center; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
      <h2 style="color: #007bff; margin: 0;">Landmark Neurospine Hospital</h2>
      <p style="color: #555; margin: 4px 0 0;">Advanced Neuro & Spine Care Superspeciality Hospital</p>
    </div>

    <h3 style="color: #333; margin-top: 20px;">Hello ${appointment.name},</h3>
    <p style="font-size: 15px; color: #444;">
      Thank you for choosing <strong>Landmark Neurospine Hospital</strong>.
      We’ve received your appointment request for the <strong>${appointment.department}</strong> department.
    </p>

    <div style="background: #fff; border-radius: 8px; padding: 15px; margin: 15px 0; box-shadow: 0 1px 4px rgba(0,0,0,0.06);">
      <p style="margin:6px 0;"><b>Date:</b> ${appointment.date}</p>
      <p style="margin:6px 0;"><b>Time:</b> ${appointment.time}</p>
      <p style="margin:6px 0;"><b>Department:</b> ${appointment.department}</p>
      <p style="margin:6px 0;"><b>Contact:</b> ${appointment.number}</p>
    </div>

    <p style="color: #555;">
      Our medical team will confirm your appointment shortly. You’ll receive another email once it’s approved.
    </p>

    <div style="margin-top: 30px; font-size: 14px; color: #888;">
      Regards,<br>
      <strong>Team Landmark Neurospine Hospital</strong><br>
      <span style="color: #007bff;">We care for your mind & spine.</span>
    </div>
  </div>
  `;
};

export const adminAppointmentTemplate = (appointment) => {
  return `
  <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 700px; margin: auto; background: #ffffff; border-radius: 10px; padding: 25px; border:1px solid #e8eefc;">
    <h2 style="color: #007bff; margin: 0 0 10px;">🩺 New Appointment Request</h2>
    <p style="color: #333; margin:0 0 12px;">A new appointment has been submitted. Details below:</p>

    <div style="background: #f7faff; border-left: 4px solid #007bff; padding: 15px; border-radius: 6px;">
      <p style="margin:6px 0;"><strong>Patient Name:</strong> ${appointment.name}</p>
      <p style="margin:6px 0;"><strong>Email:</strong> ${appointment.email}</p>
      <p style="margin:6px 0;"><strong>Phone:</strong> ${appointment.number}</p>
      <p style="margin:6px 0;"><strong>Department:</strong> ${appointment.department}</p>
      <p style="margin:6px 0;"><strong>Date:</strong> ${appointment.date}</p>
      <p style="margin:6px 0;"><strong>Time:</strong> ${appointment.time}</p>
    </div>

    <p style="font-size: 13px; color: #666; margin-top: 18px;">
      Please review and approve this appointment from the admin dashboard.
    </p>

    <div style="margin-top: 20px; font-size: 13px; color: #888;">— Landmark Neurospine Hospital</div>
  </div>
  `;
};

export const userAppointmentApprovedTemplate = (appointment) => {
  return `
  <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin:auto; background: #f9fff9; border-radius: 10px; padding: 30px;">
    <div style="text-align:center; border-bottom: 2px solid #28a745; padding-bottom: 10px;">
      <h2 style="color: #28a745; margin:0;">Appointment Approved ✅</h2>
      <p style="color:#555; margin:4px 0 0;">Landmark Neurospine Hospital</p>
    </div>

    <h3 style="color:#333; margin-top:20px;">Hello ${appointment.name},</h3>
    <p style="color:#444;">
      Your appointment has been <strong>approved</strong>. Here are the confirmed details:
    </p>

    <div style="background:#fff; border-radius:8px; padding:15px; margin:15px 0; box-shadow:0 1px 4px rgba(0,0,0,0.06);">
      <p style="margin:6px 0;"><b>Date:</b> ${appointment.date}</p>
      <p style="margin:6px 0;"><b>Time:</b> ${appointment.time}</p>
      <p style="margin:6px 0;"><b>Department:</b> ${appointment.department}</p>
      <p style="margin:6px 0;"><b>Contact:</b> ${appointment.number}</p>
    </div>

    <p style="color:#555;">Please arrive 10 minutes before your appointment for registration.</p>

    <div style="margin-top:25px; font-size:14px; color:#888;">
      Warm regards,<br>
      <strong>Team Landmark Neurospine Hospital</strong>
    </div>
  </div>
  `;
};

export const adminApprovedTemplate = (appointment) => {
  return `
  <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width:700px; margin:auto; background: #f0fff0; border-radius:10px; padding:25px; border:1px solid #e6f7ea;">
    <h2 style="color:#28a745; margin:0 0 8px;">✅ Appointment Approved</h2>
    <p style="margin:0 0 12px; color:#333;">The following appointment was approved:</p>

    <div style="background:#ffffff; padding:12px; border-radius:6px; border-left:4px solid #28a745;">
      <p style="margin:6px 0;"><strong>Patient:</strong> ${appointment.name}</p>
      <p style="margin:6px 0;"><strong>Department:</strong> ${appointment.department}</p>
      <p style="margin:6px 0;"><strong>Date:</strong> ${appointment.date}</p>
      <p style="margin:6px 0;"><strong>Time:</strong> ${appointment.time}</p>
      <p style="margin:6px 0;"><strong>Contact:</strong> ${appointment.number}</p>
    </div>

    <p style="margin-top:16px; color:#666;">The patient has been notified by email.</p>
  </div>
  `;
};
