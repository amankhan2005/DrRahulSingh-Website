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


 // server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const mongoDBUrl = process.env.MONGODB;

// ===== Middlewares =====
app.use(express.json());

// Security headers
app.use(helmet());

// Logging (dev-friendly)
app.use(morgan("dev"));

// Simple rate-limiter (protect public endpoints)
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 80, // limit each IP to 80 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// CORS — keep your allowed origins
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://landmark-hospitals.netlify.app",
  "https://adminpannel-landmark-hospital.netlify.app",
  "https://9t7n40v1-5173.inc1.devtunnels.ms/",
];
app.use(
  cors({
    origin: (origin, callback) => {
      // allow requests with no origin (like mobile apps or curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = `The CORS policy for this site does not allow access from the specified Origin.`;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
  })
);

// ===== Routes (keep your existing structure) =====
import teamRoutes from "./Routes/team.js";
app.use("/team", teamRoutes);

import blogRoutes from "./Routes/blog.routes.js";
app.use("/blog", blogRoutes);

import galleryRoutes from "./Routes/gallery.routes.js";
app.use("/gallery", galleryRoutes);

import caseRoutes from "./Routes/case.routes.js";
app.use("/case", caseRoutes);

import appointmentRoutes from "./Routes/appointment.Routes.js";
// keep old mount for compatibility and add REST-style mount
app.use("/appointment", appointmentRoutes);
app.use("/api/appointments", appointmentRoutes);

import adminRoutes from "./Routes/user.routes.js";
app.use("/admin", adminRoutes);

import contactRoutes from "./Routes/contact.routes.js";
app.use("/inquiry-msg", contactRoutes);

// ===== Root / Health =====
app.get("/", (req, res) => {
  res.send(`Server is Running on port ${port}`);
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime(), env: process.env.NODE_ENV || "development" });
});

// ===== Global error handler =====
app.use((err, req, res, next) => {
  console.error("Global Error:", err?.message || err);
  res.status(500).json({ message: "Internal Server Error", error: err?.message || "Unknown error" });
});

// ===== MongoDB Connection =====
mongoose
  .connect(mongoDBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(`❌ MongoDb Error: ${err}`));

// ===== Start Server =====
const server = app.listen(port, "0.0.0.0", () => {
  console.log(`🚀 Server is running on port ${port}`);
});

// Graceful shutdown (optional but useful)
const gracefulExit = () => {
  console.log("Shutting down gracefully...");
  server.close(() => {
    mongoose.connection.close(false, () => {
      console.log("MongoDb connection closed.");
      process.exit(0);
    });
  });
};
process.on("SIGTERM", gracefulExit);
process.on("SIGINT", gracefulExit);
