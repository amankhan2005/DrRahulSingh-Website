//  import express from 'express'
// import mongoose from 'mongoose'
// import dotenv from 'dotenv'
// dotenv.config();
// import cors from 'cors'
// import path from 'path'
// import { fileURLToPath } from 'url'

// const app = express()
// const port = process.env.PORT
// const mongoDBUrl = process.env.MONGODB

// app.use(express.json())
// app.use(cors())

// // ========== Existing Routes ==========
// import teamRoutes from './Routes/team.js'
// app.use('/team', teamRoutes)

// import blogRoutes from "./Routes/blog.routes.js";
// app.use("/blog", blogRoutes);

// import galleryRoutes from './Routes/gallery.routes.js'
// app.use('/gallery', galleryRoutes)

// import caseRoutes from './Routes/case.routes.js'
// app.use('/case', caseRoutes); 

// import inquiryRoutes from './Routes/inquiry.routes.js'
// app.use('/inquiry', inquiryRoutes)

// import adminRoutes from './Routes/user.routes.js'
// app.use('/admin', adminRoutes)

// import contactRoutes from './Routes/contact.routes.js'
// app.use('/inquiry-msg', contactRoutes)
// // =====================================

// // ===== MongoDB Connection =====
// mongoose.connect(mongoDBUrl)
//     .then(() => console.log('MongoDB Connected'))
//     .catch((err) => console.log(`MongoDb Error, Err- ${err}}`))

// // ===== Serve React Admin Panel =====
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// // Serve build folder (React admin panel)
// app.use(express.static(path.join(__dirname, 'build')))

// // For all other routes, serve index.html
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })

// // ===== Start Server =====
// app.listen(port, () => {
//     console.log(`Server is running on ${port}`)
// })

// app.get('/', (req, res) => {
//     res.send(`Server is Running on port ${port}`);
// });


//  import express from 'express'
// import mongoose from 'mongoose'
// import dotenv from 'dotenv'
// dotenv.config();
// import cors from 'cors'
// import path from 'path'
// import { fileURLToPath } from 'url'

// const app = express()
// const port = process.env.PORT
// const mongoDBUrl = process.env.MONGODB

// app.use(express.json())
// app.use(cors())

// // ========== Existing Routes ==========
// import teamRoutes from './Routes/team.js'
// app.use('/team', teamRoutes)

// import blogRoutes from "./Routes/blog.routes.js";
// app.use("/blog", blogRoutes);

// import galleryRoutes from './Routes/gallery.routes.js'
// app.use('/gallery', galleryRoutes)

// import caseRoutes from './Routes/case.routes.js'
// app.use('/case', caseRoutes); 

// import inquiryRoutes from './Routes/inquiry.routes.js'
// app.use('/inquiry', inquiryRoutes)

// import adminRoutes from './Routes/user.routes.js'
// app.use('/admin', adminRoutes)

// import contactRoutes from './Routes/contact.routes.js'
// app.use('/inquiry-msg', contactRoutes)
// // =====================================


// app.get("/",(req,res)=>{
//     res.send("Server is Runing")
// })

// // ===== MongoDB Connection =====
// mongoose.connect(mongoDBUrl)
//     .then(() => console.log('MongoDB Connected'))
//     .catch((err) => console.log(`MongoDb Error, Err- ${err}}`))

// // ===== Serve Vite Admin Panel =====
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// // Serve dist folder (Vite build)
// app.use(express.static(path.join(__dirname, 'dist')))

// // For all other routes, serve index.html
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist', 'index.html'))
// })

// // ===== Start Server =====
// app.listen(port, () => {
//     console.log(`Server is running on ${port}`)
// })

// app.get('/', (req, res) => {
//     res.send(`Server is Running on port ${port}`);
// });


import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';


const app = express();
const port = process.env.PORT || 5000;
const mongoDBUrl = process.env.MONGODB;

app.use(express.json());
app.use(cors(
  {origin:["http://localhost:5173","http://localhost:5174","https://landmark-hospitals.netlify.app","https://adminpannel-landmark-hospital.netlify.app"]}
));

// ========== Existing Routes ==========
import teamRoutes from './Routes/team.js';
app.use('/team', teamRoutes);

import blogRoutes from "./Routes/blog.routes.js";
app.use("/blog", blogRoutes);

import galleryRoutes from './Routes/gallery.routes.js';
app.use('/gallery', galleryRoutes);

import caseRoutes from './Routes/case.routes.js';
app.use('/case', caseRoutes); 

 import appointmentRoutes from "./Routes/appointment.Routes.js";
app.use("/appointment", appointmentRoutes);

import adminRoutes from './Routes/user.routes.js';
app.use('/admin', adminRoutes);

import contactRoutes from './Routes/contact.routes.js';
app.use('/inquiry-msg', contactRoutes);
// =====================================

// ===== Root Test Route =====
app.get("/", (req,res) => {
  res.send(`Server is Running on port ${port}`);
});

 


// ===== MongoDB Connection =====
mongoose.connect(mongoDBUrl)
    .then(() => console.log('✅ MongoDB Connected'))
    .catch((err) => console.log(`❌ MongoDb Error: ${err}`));

// ===== Start Server =====
app.listen(port, "0.0.0.0", () => {
  console.log(`🚀 Server is running on port ${port}`);
});
