import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Patient from '../models/Patient.js';

const router = express.Router();

// Register a new patient
router.post('/register', async (req, res) => {
    const { name, email, password, phone, bloodGroup } = req.body;

    try {
        const existing = await Patient.findOne({ email });
        if (existing) return res.status(400).json({ message: 'Patient already exists' });

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new patient and save it to the database
        const patient = new Patient({ name, email, password: hashedPassword, phone, bloodGroup });
        await patient.save();

        res.status(201).json({ message: 'Patient registered successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error registering patient', error: err.message });
    }
});

// Login a patient
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const patient = await Patient.findOne({ email });
        if (!patient) return res.status(400).json({ message: 'Invalid credentials' });

        // Compare the entered password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, patient.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        // Generate a JWT token for the patient
        const token = jwt.sign({ id: patient._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token, patient });
    } catch (err) {
        res.status(500).json({ message: 'Error logging in', error: err.message });
    }
});

export default router;