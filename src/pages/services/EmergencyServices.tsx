import React from 'react';
import { Phone, Ambulance, ChevronFirst as FirstAid } from 'lucide-react';

const emergencyContacts = [
  { name: 'Emergency Ambulance', number: '911', icon: Ambulance },
  { name: 'Organ Transport', number: '1-800-ORGAN', icon: FirstAid },
  { name: 'Medical Helpline', number: '1-800-MED-HELP', icon: Phone },
];

const emergencyLocations = [
  { name: 'City General Hospital', address: '123 Medical Center Dr', phone: '555-0123' },
  { name: 'Memorial Hospital', address: '456 Healthcare Ave', phone: '555-0124' },
  { name: 'St. Mary\'s Medical Center', address: '789 Emergency Rd', phone: '555-0125' },
];

export default function EmergencyServices() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <FirstAid className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Emergency Services</h1>
          <p className="text-lg text-gray-600">24/7 Emergency Support</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold mb-6">Emergency Contacts</h2>
            <div className="space-y-4">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-center">
                  <contact.icon className="w-8 h-8 text-red-500 mr-4" />
                  <div>
                    <h3 className="font-semibold">{contact.name}</h3>
                    <p className="text-xl text-red-500">{contact.number}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Emergency Locations</h2>
            <div className="space-y-4">
              {emergencyLocations.map((location, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="font-semibold">{location.name}</h3>
                  <p className="text-gray-600">{location.address}</p>
                  <p className="text-blue-500">{location.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}