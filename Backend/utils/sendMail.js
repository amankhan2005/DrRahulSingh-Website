 import nodemailer from "nodemailer";

export const sendMail = async ({ to, subject, text = "", html = "" }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    const info = await transporter.sendMail({
      from: `"Landmark Hospital" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      html,
    });

    console.log(`Email sent to ${to}: ${info.messageId}`);
  } catch (error) {
    console.error(`Failed to send email to ${to}:`, error.message);
  }
};
