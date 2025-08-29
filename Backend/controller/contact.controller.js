import nodemailer from 'nodemailer';
import Contact from '../model/contact.model.js'

export const createInquiry = async (req, res) => {
  const { department, patientName, mobileNo, email, message } = req.body;

  if (!department || !patientName || !mobileNo || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newContact = new Contact({
      department,
      patientName,
      mobileNo,
      email,
      message
    });
    await newContact.save();

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
      subject: 'Contact Confirmation',
      text: `
        Dear ${patientName},

        Your Contact has been successfully created with Landmark Advance Neurospine Care Superspeciality Hospital
 in the ${department} department.

          email:${email}
          Mobile No: ${mobileNo}
        - Message: ${message}

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
      message: 'Inquery Send successfully!',
      Contact: newContact,
    });
  } catch (error) {
    console.error('Error creating Contact:', error);
    res.status(500).json({ message: 'Error creating Contact', error });
  }
};


export const getAllInquiry = async (req, res) => {
  try {
    const inquiry = await Contact.find();
    res.status(200).json(inquiry);
  } catch (error) {
    console.error('Error fetching Inquiry Data:', error);
    res.status(500).json({ message: 'Error fetching Inquiry Data', error });
  }
};

export const deleteInquiry = async (req, res) => {
  const { id } = req.params;

  try {
    const DeletedContact = await Contact.findByIdAndDelete(id);

    if (!DeletedContact) {
      return res.status(404).json({ message: 'Inquiry not found' });
    }
    res.status(200).json({ message: 'Inquiry deleted successfully' });
  } catch (error) {
    console.error('Error deleting Enquiry:', error);
    res.status(500).json({ message: 'Error deleting Inquiry', error });
  }
};
