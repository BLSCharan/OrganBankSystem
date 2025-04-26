import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import doctorRoutes from './routes/doctorRoutes.js';
import patientRoutes from './routes/patientRoutes.js';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/patients', patientRoutes);
app.use('/api/doctors', doctorRoutes);

// DB Connect
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
    
    // Use '0.0.0.0' to allow external connections
    app.listen(process.env.PORT || 5000, '0.0.0.0', () => {
        console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
}).catch((err) => console.log('Mongo error:', err));
