import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();
import cors from 'cors'
const app = express()
const port = process.env.PORT
const mongoDBUrl = process.env.MONGODB
app.use(express.json())
app.use(cors())

//routes

import teamRoutes from './Routes/team.js'
app.use('/team',teamRoutes)

import blogRoutes from "./Routes/blog.routes.js";
app.use("/blog", blogRoutes);


import galleryRoutes from './Routes/gallery.routes.js'
app.use('/gallery',galleryRoutes)

import caseRoutes from './Routes/case.routes.js'
app.use('/case',caseRoutes); 

import inquiryRoutes from './Routes/inquiry.routes.js'
app.use('/inquiry',inquiryRoutes)

import adminRoutes from './Routes/user.routes.js'
app.use('/admin',adminRoutes)

import contactRoutes from './Routes/contact.routes.js'
app.use('/inquiry-msg',contactRoutes)


mongoose.connect(mongoDBUrl).then(() => console.log('MongoDB Connected')).catch((err) => console.log(`MongoDb Error, Err- ${err}}`))
app.listen(port, () => { console.log(`Server is running on ${port}`) })
app.get('/', (req, res) => {
    res.send(`Server is Running on port ${port}`);
});