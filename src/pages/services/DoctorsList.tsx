import React, { useState } from 'react';
import { User, Calendar, MapPin, Phone } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Modal from 'react-modal';

Modal.setAppElement('#root');

const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialization: 'Transplant Surgeon',
    hospital: 'City General Hospital',
    experience: '15 years',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialization: 'Cardiologist',
    hospital: 'Heart Care Center',
    experience: '12 years',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    specialization: 'Nephrologist',
    hospital: 'Kidney Care Institute',
    experience: '10 years',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300'
  }
];

export default function DoctorsList() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAppointment = (doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const bookAppointment = () => {
    // TODO: Implement appointment booking logic
    setIsModalOpen(false);
    alert('Appointment booked successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <User className="w-16 h-16 text-blue-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Doctors</h1>
          <p className="text-lg text-gray-600">Book an appointment with our specialists</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                <p className="text-gray-600 mb-4">{doctor.specialization}</p>
                <div className="space-y-2 text-gray-600 mb-6">
                  <p className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {doctor.hospital}
                  </p>
                  <p className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {doctor.experience} experience
                  </p>
                </div>
                <button
                  onClick={() => handleAppointment(doctor)}
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          className="max-w-md mx-auto mt-20 bg-white rounded-lg shadow-xl p-6"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          {selectedDoctor && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Book Appointment</h2>
              <p className="mb-4">with {selectedDoctor.name}</p>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Select Date</label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  className="w-full p-2 border rounded"
                  minDate={new Date()}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Select Time</label>
                <select className="w-full p-2 border rounded">
                  <option>9:00 AM</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>2:00 PM</option>
                  <option>3:00 PM</option>
                  <option>4:00 PM</option>
                </select>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  onClick={bookAppointment}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
}