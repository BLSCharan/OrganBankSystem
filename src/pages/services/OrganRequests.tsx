import React from 'react';
import { FileText } from 'lucide-react';

const requests = [
  { name: 'Alice Brown', organ: 'Heart', urgency: 'Critical', bloodGroup: 'AB+', hospital: 'City General Hospital' },
  { name: 'Bob Wilson', organ: 'Kidney', urgency: 'High', bloodGroup: 'O-', hospital: 'Memorial Hospital' },
  { name: 'Carol Davis', organ: 'Liver', urgency: 'Medium', bloodGroup: 'B+', hospital: 'St. Mary\'s Medical Center' },
];

export default function OrganRequests() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <FileText className="w-16 h-16 text-blue-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Organ Requests</h1>
          <p className="text-lg text-gray-600">Current organ transplant requests</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {requests.map((request, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className={`text-sm font-semibold mb-4 ${
                request.urgency === 'Critical' ? 'text-red-500' :
                request.urgency === 'High' ? 'text-orange-500' : 'text-yellow-500'
              }`}>
                {request.urgency} Priority
              </div>
              <h3 className="text-xl font-semibold mb-2">{request.name}</h3>
              <div className="space-y-2 text-gray-600">
                <p>Required Organ: {request.organ}</p>
                <p>Blood Group: {request.bloodGroup}</p>
                <p>Hospital: {request.hospital}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}