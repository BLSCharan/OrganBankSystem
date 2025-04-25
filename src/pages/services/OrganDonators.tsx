import React from 'react';
import { Heart } from 'lucide-react';

const donators = [
  { name: 'John Doe', organ: 'Kidney', bloodGroup: 'O+', contact: '+1 234-567-8900' },
  { name: 'Jane Smith', organ: 'Liver', bloodGroup: 'A+', contact: '+1 234-567-8901' },
  { name: 'Mike Johnson', organ: 'Cornea', bloodGroup: 'B+', contact: '+1 234-567-8902' },
];

export default function OrganDonators() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Heart className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Organ Donators</h1>
          <p className="text-lg text-gray-600">List of registered organ donors</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {donators.map((donator, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{donator.name}</h3>
              <div className="space-y-2 text-gray-600">
                <p>Organ: {donator.organ}</p>
                <p>Blood Group: {donator.bloodGroup}</p>
                <p>Contact: {donator.contact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}