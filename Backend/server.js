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
app.get('/', (req, res) => {
    res.send('Organ Bank API Server Running ✅');
  });
  

// DB Connect
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
    
    // Debugging: Log the port being used
    const port = process.env.PORT || 5000;
    console.log(`Using port: ${port}`);  // Log the port to make sure it's being picked up correctly

    // Make sure the server listens on the right IP and port
    app.listen(port, '0.0.0.0', () => {
        console.log(`Server running on port ${port}`);
    });
}).catch((err) => console.log('MongoDB error:', err));
