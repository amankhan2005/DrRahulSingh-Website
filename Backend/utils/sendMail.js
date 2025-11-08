 // utils/sendMail.js
import nodemailer from "nodemailer";

const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
};

/**
 * sendMail({ to, subject, html, text })
 * returns the nodemailer result (Promise)
 */
export const sendMail = async ({ to, subject, html, text }) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: `"Landmark Neurospine Hospital" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
    text: text || null,
  };

  return transporter.sendMail(mailOptions);
};
