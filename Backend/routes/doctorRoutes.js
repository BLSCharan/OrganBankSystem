import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Doctor from '../models/Doctor.js';

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existing = await Doctor.findOne({ email });
        if (existing) return res.status(400).json({ message: 'Doctor already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const doctor = new Doctor({ name, email, password: hashedPassword });
        await doctor.save();

        res.status(201).json({ message: 'Doctor registered successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error registering doctor', error: err.message });
    }
});

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const doctor = await Doctor.findOne({ email });
        if (!doctor) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, doctor.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: doctor._id }, process.env.JWT_SECRET);
        res.json({ token, doctor });
    } catch (err) {
        res.status(500).json({ message: 'Error logging in', error: err.message });
    }
});

export default router;
