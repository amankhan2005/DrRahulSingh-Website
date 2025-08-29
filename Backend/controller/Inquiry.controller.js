import nodemailer from 'nodemailer';
import Appointment from '../model/Inquery.model.js'

export const createAppointment = async (req, res) => {
  const { department, requestedDoctor, patientName, mobileNo, email, date, time } = req.body;

  if (!department || !requestedDoctor || !patientName || !mobileNo || !email || !date || !time) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newAppointment = new Appointment({
      department,
      requestedDoctor,
      patientName,
      mobileNo,
      email,
      date,
      time,
    });
    await newAppointment.save();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: `${process.env.EMAIL_USER}`,
        pass: `${process.env.EMAIL_PASS}` , 
      },
      tls: {
        rejectUnauthorized: false, 
      },
    });

    const mailOptions = {
      from: `${process.env.EMAIL_USER}`,
      to: 'suhel.codecrafter@gmail.com', 
      subject: 'Appointment Confirmation',
      text: `
        Dear ${patientName},

        Your appointment has been successfully created with ${requestedDoctor} in the ${department} department.

        Appointment Details:
        - Date: ${date}
        - Time: ${time}

        If you have any questions, feel free to contact us.

        Thank you,
        Your Clinic/Doctor's Office
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Error sending email', error });
      }
      console.log('Email sent:', info.response);
    });

    res.status(201).json({
      message: 'Appointment Book successfully!',
      appointment: newAppointment,
    });
  } catch (error) {
    console.error('Error creating appointment:', error);
    res.status(500).json({ message: 'Error creating appointment', error });
  }
};


export const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ message: 'Error fetching appointments', error });
  }
};

export const deleteAppointment = async (req, res) => {
  const { id } = req.params;

  try {
    const appointment = await Appointment.findByIdAndDelete(id);

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    res.status(200).json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    console.error('Error deleting appointment:', error);
    res.status(500).json({ message: 'Error deleting appointment', error });
  }
};
