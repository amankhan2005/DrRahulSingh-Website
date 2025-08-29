import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema(
  {
    department: {
      type: String,
      required: true,
    },
    patientName: {
      type: String,
      required: true,
    },
    mobileNo: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message:{
        type:String,
    } 
},
  { timestamps: true } 
);

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
