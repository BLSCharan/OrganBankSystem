import React from 'react';
import { Droplet, Heart, Activity } from 'lucide-react';

const bloodInventory = [
  { type: 'A+', status: 'High', units: 50 },
  { type: 'A-', status: 'Low', units: 15 },
  { type: 'B+', status: 'Medium', units: 30 },
  { type: 'B-', status: 'Low', units: 10 },
  { type: 'AB+', status: 'Medium', units: 25 },
  { type: 'AB-', status: 'Critical', units: 5 },
  { type: 'O+', status: 'High', units: 45 },
  { type: 'O-', status: 'Low', units: 20 }
];

export default function BloodBank() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Droplet className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blood Bank</h1>
          <p className="text-lg text-gray-600">Blood Donation and Storage Facilities</p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {bloodInventory.map((blood, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{blood.type}</h3>
                <div className={`text-sm font-semibold ${
                  blood.status === 'High' ? 'text-green-500' :
                  blood.status === 'Medium' ? 'text-yellow-500' :
                  blood.status === 'Low' ? 'text-orange-500' : 'text-red-500'
                }`}>
                  {blood.status}
                </div>
                <p className="text-gray-600 mt-2">{blood.units} units</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">Donation Requirements</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Heart className="w-5 h-5 text-red-500 mr-2 mt-1" />
                <span>Age: 18-65 years</span>
              </li>
              <li className="flex items-start">
                <Heart className="w-5 h-5 text-red-500 mr-2 mt-1" />
                <span>Weight: At least 50kg</span>
              </li>
              <li className="flex items-start">
                <Heart className="w-5 h-5 text-red-500 mr-2 mt-1" />
                <span>Good health condition</span>
              </li>
              <li className="flex items-start">
                <Heart className="w-5 h-5 text-red-500 mr-2 mt-1" />
                <span>No recent infections or illnesses</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">Donation Process</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <Activity className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Registration & Screening</h3>
                  <p className="text-gray-600">15 minutes</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <Droplet className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Donation</h3>
                  <p className="text-gray-600">30-45 minutes</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <Heart className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Recovery</h3>
                  <p className="text-gray-600">15 minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}