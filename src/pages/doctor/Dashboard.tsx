import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Activity, Calendar, Clock, Users, FileText, LogOut, Heart } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function DoctorDashboard() {
  const [activeTab, setActiveTab] = useState('profile');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Doctor Profile</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Name</p>
                <p className="font-semibold">Dr. Sarah Johnson</p>
              </div>
              <div>
                <p className="text-gray-600">Specialization</p>
                <p className="font-semibold">Transplant Surgeon</p>
              </div>
              <div>
                <p className="text-gray-600">License Number</p>
                <p className="font-semibold">MD12345</p>
              </div>
              <div>
                <p className="text-gray-600">Hospital</p>
                <p className="font-semibold">City General Hospital</p>
              </div>
            </div>
          </div>
        );
      case 'appointments':
        return (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold">Appointments</h3>
              <DatePicker
                selected={selectedDate}
                onChange={(date: Date) => setSelectedDate(date)}
                className="p-2 border rounded"
              />
            </div>
            <div className="space-y-4">
              {['Pending', 'Confirmed', 'Completed'].map((status) => (
                <div key={status} className="border-b pb-4">
                  <h4 className="font-semibold mb-2">{status}</h4>
                  <div className="space-y-2">
                    {[1, 2].map((appointment) => (
                      <div key={appointment} className="flex justify-between items-center bg-gray-50 p-3 rounded">
                        <div>
                          <p className="font-medium">Patient {appointment}</p>
                          <p className="text-sm text-gray-600">9:00 AM - Consultation</p>
                        </div>
                        <button className="text-blue-500 hover:text-blue-600">
                          View Details
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'patients':
        return (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Patient Records</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((patient) => (
                <div key={patient} className="border-b pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">Patient {patient}</p>
                      <p className="text-gray-600">Last Visit: March {patient}, 2025</p>
                      <p className="text-sm text-gray-500">Condition: Stable</p>
                    </div>
                    <div className="space-x-2">
                      <button className="text-blue-500 hover:text-blue-600">
                        View History
                      </button>
                      <button className="text-green-500 hover:text-green-600">
                        Add Prescription
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'transplants':
        return (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Transplant Activities</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Upcoming Transplants</h4>
                <div className="space-y-2">
                  {[1, 2].map((transplant) => (
                    <div key={transplant} className="bg-blue-50 p-3 rounded">
                      <p className="font-medium">Kidney Transplant - Patient {transplant}</p>
                      <p className="text-sm text-gray-600">Scheduled: March {transplant + 10}, 2025</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Completed Transplants</h4>
                <div className="space-y-2">
                  {[1, 2].map((transplant) => (
                    <div key={transplant} className="bg-green-50 p-3 rounded">
                      <p className="font-medium">Heart Transplant - Patient {transplant}</p>
                      <p className="text-sm text-gray-600">Completed: February {transplant + 20}, 2025</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white h-screen shadow-lg fixed">
          <div className="p-4">
            <div className="flex items-center space-x-2 mb-8">
              <Heart className="h-8 w-8 text-red-500" />
              <span className="text-xl font-bold">OrganBank</span>
            </div>
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('profile')}
                className={`flex items-center space-x-2 w-full p-2 rounded ${
                  activeTab === 'profile' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                }`}
              >
                <User className="h-5 w-5" />
                <span>Profile</span>
              </button>
              <button
                onClick={() => setActiveTab('appointments')}
                className={`flex items-center space-x-2 w-full p-2 rounded ${
                  activeTab === 'appointments' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                }`}
              >
                <Calendar className="h-5 w-5" />
                <span>Appointments</span>
              </button>
              <button
                onClick={() => setActiveTab('patients')}
                className={`flex items-center space-x-2 w-full p-2 rounded ${
                  activeTab === 'patients' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                }`}
              >
                <Users className="h-5 w-5" />
                <span>Patients</span>
              </button>
              <button
                onClick={() => setActiveTab('transplants')}
                className={`flex items-center space-x-2 w-full p-2 rounded ${
                  activeTab === 'transplants' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                }`}
              >
                <Activity className="h-5 w-5" />
                <span>Transplants</span>
              </button>
              <Link
                to="/doctor/login"
                className="flex items-center space-x-2 w-full p-2 rounded text-red-600 hover:bg-red-50 mt-8"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </Link>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-64 flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}