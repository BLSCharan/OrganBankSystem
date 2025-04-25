// backend/models/Patient.js
import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  phone: String,
  bloodGroup: String
  
});

const Patient = mongoose.model('Patient', patientSchema);

export default Patient;
